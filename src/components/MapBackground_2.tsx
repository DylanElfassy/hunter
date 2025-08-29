"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import arButtonImg from "../assets/ar.jpeg";
import locButtonImg from "../assets/loc.jpeg";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

// --- TypeScript global declaration ---
declare global {
  interface Window {
    Unity?: { call: (msg: string) => void };
    handleUnityMessage?: (msg: string) => void;
  }
}

interface MarkerData {
  id: string;
  coords: [number, number];
  type?: "Dollar_Box_Open" | "Black_XP";
}

interface RoutePoint {
  coords: [number, number];
}

const MapBackground2: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const routePointMarkersRef = useRef<mapboxgl.Marker[]>([]);

  // ✅ Track 3D marker objects
  const markersRef = useRef<
    Record<string, { obj: THREE.Object3D; layerId: string }>
  >({});

  // --- 3D Models Config ---
  const modelConfigs = {
    Dollar_Box_Open: {
      url: "/models/Dollar_Box_Open.glb",
      scaleMultiplier: 30,
      rotate: [Math.PI / 2, Math.PI, 0],
    },
    Black_XP: {
      url: "/models/Black_XP.glb",
      scaleMultiplier: 900,
      rotate: [Math.PI / 2, Math.PI, 0],
    },
  };

  // --- SEND TO UNITY ---
  const sendToUnity = (messageObj: any) => {
    try {
      const jsonString = JSON.stringify(messageObj);
      console.log(jsonString);

      if (window.Unity && typeof window.Unity.call === "function") {
        window.Unity.call(jsonString);
      } else {
        console.warn("[React->Unity] Unity.call not available");
      }
    } catch (error) {
      console.error("[React->Unity] Error sending message:", error);
    }
  };

  // --- HANDLE MARKER CLICK ---
  const handleMarkerClick = (markerId: string, coords: [number, number]) => {
    sendToUnity({ type: "markerClick", id: markerId, coords });
  };

  // --- REMOVE MARKER ---
  const removeMarker = (id: string) => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const marker = markersRef.current[id];
    if (!marker) return;

    // Dispose 3D object
    marker.obj.traverse((child) => {
      if ((child as THREE.Mesh).geometry)
        (child as THREE.Mesh).geometry.dispose();
      if ((child as THREE.Mesh).material) {
        const mat = (child as THREE.Mesh).material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      }
    });

    marker.obj.removeFromParent();

    // Remove Mapbox layer
    if (map.getLayer(marker.layerId)) map.removeLayer(marker.layerId);

    delete markersRef.current[id];
  };

  // --- CLEAR ALL MARKERS ---
  const clearAllMarkers = () => {
    Object.keys(markersRef.current).forEach((id) => removeMarker(id));
  };

  // --- HIGHLIGHT MARKER ---
  const highlightMarker = (id: string) => {
    const marker = markersRef.current[id];
    if (marker) marker.obj.scale.multiplyScalar(1.2);
  };

  // --- ADD ROUTE ---
  const addRoute = (points: RoutePoint[]) => {
    if (!mapRef.current || points.length < 2) return;
    const map = mapRef.current;

    if (!map.isStyleLoaded()) {
      map.once("styledata", () => addRoute(points));
      return;
    }

    if (map.getSource("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }

    routePointMarkersRef.current.forEach((m) => m.remove());
    routePointMarkersRef.current = [];

    const routeGeoJSON: GeoJSON.Feature<GeoJSON.LineString> = {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: points.map((p) => p.coords),
      },
      properties: {},
    };

    map.addSource("route", { type: "geojson", data: routeGeoJSON });

    const buildingLayer = map
      .getStyle()
      .layers?.find((l) => l.type === "fill-extrusion")?.id;

    map.addLayer(
      {
        id: "route",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": "#000", "line-width": 6, "line-dasharray": [2, 4] },
      },
      buildingLayer
    );

    points.forEach((p) => {
      const el = document.createElement("div");
      el.style.width = "12px";
      el.style.height = "12px";
      el.style.backgroundColor = "#000";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid white";
      el.style.pointerEvents = "none";

      const marker = new mapboxgl.Marker(el).setLngLat(p.coords).addTo(map);
      routePointMarkersRef.current.push(marker);
    });
  };

 // --- ADD 3D MARKERS ---
const add3DMarkers = (markers: MarkerData[]) => {
  if (!mapRef.current) return;
  const map = mapRef.current;

  const types = ["Dollar_Box_Open", "Black_XP"] as const;

  markers.forEach((m) => {
    const type = m.type ?? types[Math.floor(Math.random() * types.length)];
    const merc = mapboxgl.MercatorCoordinate.fromLngLat(m.coords, 120);
    const cfg = modelConfigs[type];

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, -70, 100).normalize();
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0, 70, 100).normalize();
    scene.add(light2);

    const loader = new GLTFLoader();
    loader.load(
      cfg.url,
      (gltf) => {
        const obj = gltf.scene;

        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const mat = mesh.material;
            if (Array.isArray(mat))
              mat.forEach((m) => (m.side = THREE.DoubleSide));
            else mat.side = THREE.DoubleSide;

            mesh.geometry.computeVertexNormals();
          }
        });

        obj.userData.transform = {
          translateX: merc.x,
          translateY: merc.y,
          translateZ: merc.z,
          rotateX: cfg.rotate[0],
          rotateY: cfg.rotate[1],
          rotateZ: cfg.rotate[2],
          scale: merc.meterInMercatorCoordinateUnits() * cfg.scaleMultiplier,
        };

        scene.add(obj);

        // Save reference
        const layerId = `3d-marker-${m.id}`;
        markersRef.current[m.id] = { obj, layerId };

        // ✅ Invisible clickable marker overlay
        const el = document.createElement("div");
        el.style.width = `${cfg.scaleMultiplier * 2}px`;
        el.style.height = `${cfg.scaleMultiplier * 2}px`;
        el.style.background = "transparent";
        el.style.cursor = "pointer";

        const clickMarker = new mapboxgl.Marker({
          element: el,
          anchor: "center",
        })
          .setLngLat(m.coords)
          .addTo(map);

        // Closure keeps correct id + coords
        el.addEventListener("click", () => {
          console.log("Clicked marker:", m.id, m.coords);
          handleMarkerClick(m.id, m.coords);
        });
      },
      undefined,
      (err) => console.error("Error loading 3D model:", err)
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: (map as any).painter.context.gl,
      antialias: true,
    });
    renderer.autoClear = false;

    const layerId = `3d-marker-${m.id}`;

    const layer: mapboxgl.CustomLayerInterface = {
      id: layerId,
      type: "custom",
      renderingMode: "3d",
      onAdd: () => {},
      render: (_gl, matrix) => {
        const mtx = new THREE.Matrix4().fromArray(matrix);

        scene.traverse((obj) => {
          if ((obj as any).userData.transform) {
            const t = (obj as any).userData.transform;

            const rotationX = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(1, 0, 0),
              t.rotateX
            );
            const rotationY = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 1, 0),
              t.rotateY
            );
            const rotationZ = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 0, 1),
              t.rotateZ
            );

            const l = new THREE.Matrix4()
              .makeTranslation(t.translateX, t.translateY, t.translateZ)
              .scale(new THREE.Vector3(t.scale, -t.scale, t.scale))
              .multiply(rotationX)
              .multiply(rotationY)
              .multiply(rotationZ);

            camera.projectionMatrix = mtx.clone().multiply(l);
          }
        });

        renderer.resetState();
        renderer.render(scene, camera);
        map.triggerRepaint();
      },
    };

    map.addLayer(layer);
  });

  // ✅ Send once, after all markers are added
  sendToUnity({
    type: "markersAdded",
    success: true,
    count: markers.length,
  });
};


  // --- SETUP UNITY BRIDGE ---
  const setupUnityBridge = () => {
    window.handleUnityMessage = (message) => {
      try {
        const data =
          typeof message === "string" ? JSON.parse(message) : message;

        switch (data.action) {
          case "add":
            if (Array.isArray(data.markers)) add3DMarkers(data.markers);
            break;
          case "remove":
            if (data.id) removeMarker(data.id);
            break;
          case "clear":
            clearAllMarkers();
            break;
          case "highlight":
            if (data.id) highlightMarker(data.id);
            break;
          case "route":
            if (Array.isArray(data.points)) addRoute(data.points);
            break;
          default:
            console.warn(
              "[React] Unknown Unity message action:",
              data.action
            );
        }
      } catch (error) {
        console.error("[React] Error handling Unity message:", error);
      }
    };

    console.log("[React] Unity bridge setup complete");
  };

  // --- MAP INIT ---
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [-73.976, 40.769],
      zoom: 15,
      pitch: 75,
      bearing: -110,
      interactive: true,
      antialias: true,
    });

    map.on("style.load", () => {
      map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
      map.setConfigProperty("basemap", "showPlaceLabels", false);
      map.setConfigProperty("basemap", "showRoadLabels", false);
      map.setConfigProperty("basemap", "showTransitLabels", false);
      map.setConfigProperty("basemap", "lightPreset", "dusk");
      map.setConfigProperty("basemap", "show3dObjects", false);
    });

    map.on("zoom", () => {
      if (map.getZoom() > 15)
        map.setConfigProperty("basemap", "show3dObjects", true);
      else map.setConfigProperty("basemap", "show3dObjects", false);
    });

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.addControl(geolocateControl, "bottom-right");

    const observer = new MutationObserver(() => {
      const button = document.querySelector(
        ".mapboxgl-ctrl-geolocate"
      ) as HTMLElement;

      if (button) {
        button.style.width = "64px";
        button.style.height = "64px";
        button.style.backgroundImage = `url(${locButtonImg.src})`;
        button.style.backgroundSize = "cover";
        button.style.backgroundPosition = "center";
        button.style.borderRadius = "50%";
        button.style.zIndex = "10000";
        button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        button.style.border = "none";
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    mapRef.current = map;

    // Setup Unity bridge
    setupUnityBridge();

    return () => {
      map.remove();
      mapRef.current = null;
      routePointMarkersRef.current = [];
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-0">
      <div ref={mapContainer} className="w-full h-full" />
      {/* AR Mode Button */}
      <button
        onClick={() => sendToUnity({ type: "activateAR" })}
        style={{
          backgroundImage: `url(${arButtonImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute bottom-24 right-4 w-16 h-16 rounded-full shadow-lg border-none cursor-pointer hover:scale-110 transition-transform"
      />
    </div>
  );
};

export default MapBackground2;
