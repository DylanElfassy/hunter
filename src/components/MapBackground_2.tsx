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

  interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number;
}

interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}
// -------------------------
// GEOLOCATION POLYFILL
// -------------------------
(function () {
  // Ensure navigator.geolocation exists
  if (!navigator.geolocation) {
    (navigator as any).geolocation = {} as Geolocation;
  }

  const listeners = new Map<number, PositionCallback>();
  let pendingGets: PositionCallback[] = [];
  let nextId = 1;

  // Save original browser geolocation functions
  const originalGetCurrentPosition = navigator.geolocation.getCurrentPosition?.bind(navigator.geolocation);
  const originalWatchPosition = navigator.geolocation.watchPosition?.bind(navigator.geolocation);
  const originalClearWatch = navigator.geolocation.clearWatch?.bind(navigator.geolocation);

  // Helper to create a GeolocationPosition
  function makeGeoPosition(lat: number, lon: number, acc: number): GeolocationPosition {
    return {
      coords: {
        latitude: lat,
        longitude: lon,
        altitude: null,
        accuracy: acc,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: Date.now(),
    };
  }

  function sendToUnity(obj: any) {
    try {
      if (window.vuplex?.postMessage) {
        window.vuplex.postMessage(JSON.stringify(obj));
      } else if (window.Unity?.call) {
        window.Unity.call(JSON.stringify(obj));
      } else {
        // Browser fallback: call original geolocation without recursion
        if (obj.type === "geo:getOnce" && originalGetCurrentPosition) {
          originalGetCurrentPosition(
            (pos) => {
              console.log("[GeoPolyfill] Browser geolocation:", pos.coords);
              window.__applyUnityGeolocation?.(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
            },
            (err) => console.warn("[GeoPolyfill] geolocation error:", err),
            obj.options || {}
          );
        } else if (obj.type === "geo:startWatch" && originalWatchPosition) {
          const id = originalWatchPosition(
            (pos) => {
              console.log("[GeoPolyfill] Browser watch position:", pos.coords);
              window.__applyUnityGeolocation?.(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy, obj.id);
            },
            (err) => console.warn("[GeoPolyfill] geolocation watch error:", err),
            obj.options || {}
          );
          // Optionally store id to allow clearWatch in browser
        }
      }
    } catch (e) {
      console.error("[GeoPolyfill] send error", e);
    }
  }

  // Called by Unity/Vuplex with coordinates
  window.__applyUnityGeolocation = function (lat: number, lon: number, acc: number, id?: number) {
const pos = makeGeoPosition(lat, lon, acc) as any;

    if (id && listeners.has(id)) {
      try { listeners.get(id)?.(pos); } catch (e) { console.error(e); }
    } else {
      const cbs = pendingGets.slice();
      pendingGets = [];
      cbs.forEach(cb => { try { cb(pos); } catch (e) { console.error(e); } });
    }
  };

  // Override geolocation methods
  navigator.geolocation.getCurrentPosition = function (success, error, options) {
    pendingGets.push(success);
    sendToUnity({ type: "geo:getOnce", options: options || null });
  };

  navigator.geolocation.watchPosition = function (success, error, options) {
    const id = nextId++;
    listeners.set(id, success);
    sendToUnity({ type: "geo:startWatch", id, options: options || null });
    return id;
  };

  navigator.geolocation.clearWatch = function (id: number) {
    if (listeners.has(id)) {
      listeners.delete(id);
      sendToUnity({ type: "geo:stopWatch", id });
      if (originalClearWatch) originalClearWatch(id);
    }
  };

  console.log("[GeoPolyfill] navigator.geolocation is now bridged to Unity");
})();

// -------------------------
// GLOBAL WINDOW TYPES
// -------------------------
declare global {
  interface Window {
    Unity?: { call: (msg: string) => void };
    vuplex?: { postMessage: (msg: any) => void }; // must match existing type
    __applyUnityGeolocation?: (lat: number, lon: number, acc: number, id?: number) => void;
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
const markersRef = useRef<
  Record<string, { obj: THREE.Object3D; layerId: string; el: HTMLDivElement }>
>({});

  const modelConfigs = {
    Dollar_Box_Open: { url: "/models/Dollar_Box_Open.glb", scaleMultiplier: 30, rotate: [Math.PI / 2, Math.PI, 0] },
    Black_XP: { url: "/models/Black_XP.glb", scaleMultiplier: 900, rotate: [Math.PI / 2, Math.PI, 0] },
  };

  // const sendToUnity = (messageObj: any) => {
  //   try {
  //     const jsonString = JSON.stringify(messageObj);
  //     console.log(jsonString);
  //     if (window.Unity && typeof window.Unity.call === "function") {
  //       window.Unity.call(jsonString);
  //     } else {
  //       console.warn("[React->Unity] Unity.call not available");
  //     }
  //   } catch (error) {
  //     console.error("[React->Unity] Error sending message:", error);
  //   }
  // };

  	const sendToUnity = (messageObj: any) => {
      console.log("In",messageObj);
		try {
			const jsonString = JSON.stringify(messageObj);
			console.log("[React->Unity] Sending:", jsonString);
			
			// Use vuplex.postMessage (what Unity is actually listening for!)
			if (window.vuplex && typeof window.vuplex.postMessage === "function") {
				window.vuplex.postMessage(jsonString);
				console.log("[React->Unity] Sent via vuplex.postMessage");
			} 
			// Fallback to Unity.call if needed
			else if (window.Unity && typeof window.Unity.call === "function") {
				window.Unity.call(jsonString);
				console.log("[React->Unity] Sent via Unity.call (fallback)");
			} else {
				console.error("[React->Unity] No messaging method available!");
			}
		} catch (error) {
			console.error("[React->Unity] Error sending message:", error);
		}
	};
  
  const handleMarkerClick = (markerId: string, coords: [number, number]) => {
    sendToUnity({ type: "markerClick", id: markerId, coords });
  };

 const removeMarker = (id: string) => {
  if (!mapRef.current) return;
  const marker = markersRef.current[id];
  if (!marker) return;

  marker.obj.traverse((child) => {
    if ((child as THREE.Mesh).geometry) {
      (child as THREE.Mesh).geometry.dispose();
    }
    if ((child as THREE.Mesh).material) {
      const mat = (child as THREE.Mesh).material;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    }
  });

  marker.obj.removeFromParent();

  if (mapRef.current.getLayer(marker.layerId)) {
    mapRef.current.removeLayer(marker.layerId);
  }

  // ✅ remove the hidden HTML overlay
  if (marker.el && marker.el.parentNode) {
    marker.el.parentNode.removeChild(marker.el);
  }

  delete markersRef.current[id];
};


  const clearAllMarkers = () => Object.keys(markersRef.current).forEach(removeMarker);

  const highlightMarker = (id: string) => {
    const marker = markersRef.current[id];
    if (marker) marker.obj.scale.multiplyScalar(1.2);
  };

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
      geometry: { type: "LineString", coordinates: points.map((p) => p.coords) },
      properties: {},
    };

    map.addSource("route", { type: "geojson", data: routeGeoJSON });

    const buildingLayer = map.getStyle().layers?.find((l) => l.type === "fill-extrusion")?.id;

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

const add3DMarkers = (markers: MarkerData[]) => {
  if (!mapRef.current) return;
  const map = mapRef.current;

  const types = ["Dollar_Box_Open", "Black_XP"] as const;

  markers.forEach((m) => {
    const type = m.type ?? types[Math.floor(Math.random() * types.length)];
    const merc = mapboxgl.MercatorCoordinate.fromLngLat(m.coords, 120);
    const cfg = modelConfigs[type];

    // Scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, -70, 100).normalize();
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0, 70, 100).normalize();
    scene.add(light2);

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      cfg.url,
      (gltf) => {
        const obj = gltf.scene;

        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const mat = mesh.material;
            if (Array.isArray(mat)) mat.forEach((m) => (m.side = THREE.DoubleSide));
            else mat.side = THREE.DoubleSide;

            mesh.geometry.computeVertexNormals();
          }
        });

        // Transform object to Mapbox Mercator space
        obj.userData.transform = {
          translateX: merc.x,
          translateY: merc.y,
          translateZ: merc.z,
          rotateX: cfg.rotate[0],
          rotateY: cfg.rotate[1],
          rotateZ: cfg.rotate[2],
          scale: merc.meterInMercatorCoordinateUnits() * cfg.scaleMultiplier,
        };

        // Use a group wrapper
        const objGroup = new THREE.Group();
        objGroup.add(obj);
        scene.add(objGroup);

        // Save reference
        const layerId = `3d-marker-${m.id}`;
        // ✅ Clickable HTML overlay (fixed size hitbox)
// Base size
const BASE_HITBOX_SIZE = 100; // px at zoom 15
const REFERENCE_ZOOM = 15;

// Create element
const el = document.createElement("div");
el.style.borderRadius = "50%";
el.style.cursor = "pointer";
el.style.pointerEvents = "auto";
el.style.position = "absolute";
// el.style.backgroundColor = "rgba(0,0,0,0.4)"; // with opacity

// Helper to resize hitbox based on zoom
function updateHitboxSize(zoom: number) {
  // Scale with zoom (you can tweak the formula)
  const scale = Math.pow(2, zoom - REFERENCE_ZOOM);
  const size = Math.max(20, BASE_HITBOX_SIZE * scale); // keep at least 20px
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.transform = `translateY(-50%)`; // keep alignment
}

// Init size
updateHitboxSize(map.getZoom());

// Listen to zoom changes
map.on("zoom", () => {
  updateHitboxSize(map.getZoom());
});

el.dataset.id = m.id;
el.dataset.coords = JSON.stringify(m.coords);

markersRef.current[m.id] = { obj: objGroup, layerId, el };

new mapboxgl.Marker({ element: el, anchor: "bottom" })
  .setLngLat(m.coords)
  .addTo(map);
console.log("Marker overlay:", m.id, m.coords);

el.addEventListener("click", (e) => {
  const target = e.currentTarget as HTMLDivElement;

  const id = target.dataset.id;
  const coords = target.dataset.coords ? JSON.parse(target.dataset.coords) : null;
if (!id) return;
  handleMarkerClick(id, coords);
});      },
      undefined,
      (err) => console.error("Error loading 3D model:", err)
    );

    // Renderer for the scene
    const renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: (map as any).painter.context.gl,
      antialias: true,
    });
    renderer.autoClear = false;

    // Add as Mapbox custom layer
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

            const rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), t.rotateX);
            const rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), t.rotateY);
            const rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), t.rotateZ);

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

    // Notify Unity
    sendToUnity({
      type: "markersAdded",
      success: true,
      count: markers.length,
    });
  });
};

  const setupUnityBridge = () => {
    window.handleUnityMessage = (message) => {
      try {
        const data = typeof message === "string" ? JSON.parse(message) : message;

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
            console.warn("[React] Unknown Unity message action:", data.action);
        }
      } catch (error) {
        console.error("[React] Error handling Unity message:", error);
      }
    };

    console.log("[React] Unity bridge setup complete");
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [-73.976, 40.769],
      zoom: 16,
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
      map.setConfigProperty("basemap", "show3dObjects", true);
    });

      // --- CENTER MAP ON USER LOCATION ---
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log(pos)
          map.setCenter([longitude, latitude]);
        },
        (err) => {
          console.warn("Could not get user location:", err);
        },
        { enableHighAccuracy: true }
      );
    }


    // map.on("zoom", () => {
    //   if (map.getZoom() > 15) map.setConfigProperty("basemap", "show3dObjects", true);
    //   else map.setConfigProperty("basemap", "show3dObjects", false);
    // });

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.addControl(geolocateControl, "bottom-right");

    const observer = new MutationObserver(() => {
      const button = document.querySelector(".mapboxgl-ctrl-geolocate") as HTMLElement;
      if (button) {
          if (window.innerWidth < 640) { // mobile breakpoint
         button.style.width = "56px";
        button.style.height = "56px";// mobile
      } else {
         button.style.width = "48px";
        button.style.height = "48px";// desktop
      }
       
        button.style.zIndex = "10000";
        button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        button.style.border = "none";
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

   const observer_1 = new MutationObserver(() => {
  const controls = document.querySelectorAll(
    ".mapboxgl-ctrl-bottom-right .mapboxgl-ctrl"
  ) as NodeListOf<HTMLElement>;

  if (controls.length) {
    controls.forEach((ctrl) => {
      // Check screen width
      if (window.innerWidth < 640) { // mobile breakpoint
        ctrl.style.margin = "0px 24px 25px 0px"; // mobile
      } else {
        ctrl.style.margin = "0px 20px 20px 0px"; // desktop
      }
    });
    observer_1.disconnect();
  }
});

observer_1.observe(document.body, { childList: true, subtree: true });
    mapRef.current = map;
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
     <button
  onClick={() => sendToUnity({ type: "activateAR" })}
  className="
    absolute right-4 bottom-40 sm:bottom-32
    w-18 h-18 sm:w-14 sm:h-14 
    rounded-full 
    bg-gradient-to-br from-white to-gray-200 
    border-2 border-gray-300 
    shadow-xl 
    text-black font-bold text-lg sm:text-xl 
    flex items-center justify-center 
    cursor-pointer 
    hover:scale-110 hover:shadow-2xl 
    transition-transform transition-shadow
  "
>
  AR
</button>
    </div>
  );
};

export default MapBackground2;
