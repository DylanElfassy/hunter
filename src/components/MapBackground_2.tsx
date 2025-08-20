"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import arButtonImg from "../assets/ar.jpeg";
import locButtonImg from "../assets/loc.jpeg";

import treasureImg from "../assets/Treasure1.1.png";
import treasureImg_2 from "../assets/XP2.png";
import treasureImg_3 from "../assets/XP3.png";
import treasureImg_4 from "../assets/XP4.png";
import treasureImg_5 from "../assets/Treasure2.2.png";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

// --- TypeScript global declaration ---
declare global {
  interface Window {
    Unity?: { call: (msg: string) => void };
    handleUnityMessage?: (msg: string) => void;
  }
}

// pool of treasure images
const treasureImages = [
  treasureImg,
  treasureImg_2,
  treasureImg_3,
  treasureImg_4,
  treasureImg_5,
];

const getRandomTreasureImage = () => {
  const index = Math.floor(Math.random() * treasureImages.length);
  return treasureImages[index].src;
};

interface MarkerData {
  id: string;
  coords: [number, number];
}

interface RoutePoint {
  coords: [number, number];
}

const MapBackground2: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<Record<string, mapboxgl.Marker>>({});
  const routePointMarkersRef = useRef<mapboxgl.Marker[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // --- MARKERS ---
  const addMarkers = (markers: MarkerData[]) => {
  if (!mapRef.current) {
    // notify Unity failure
    window.Unity?.call(
      JSON.stringify({ type: "markersAdded", success: false, reason: "map not ready" })
    );
    return false;
  }

  try {
    markers.forEach(({ id, coords }) => {
      // remove old marker if it exists
      if (markersRef.current[id]) {
        markersRef.current[id].remove();
        delete markersRef.current[id];
      }

      const imgUrl = getRandomTreasureImage();

      const el = document.createElement("div");
      el.style.width = isMobile ? "90px" : "125px";
      el.style.height = isMobile ? "90px" : "125px";
el.style.backgroundImage = `url(${imgUrl})`; 
      el.style.backgroundSize = "contain";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundPosition = "center";
      el.style.position = "absolute";
      el.style.top = "0px";
      el.style.pointerEvents = "auto";
      el.style.zIndex = "9999";

      el.addEventListener("click", () => {
        window.Unity?.call(JSON.stringify({ type: "markerClick", id }));
      });

      const marker = new mapboxgl.Marker(el, { offset: [0, -50] })
        .setLngLat(coords)
        .addTo(mapRef.current!);

      markersRef.current[id] = marker;
    });

    // ✅ notify Unity of success
    window.Unity?.call(
      JSON.stringify({ type: "markersAdded", success: true, count: markers.length })
    );

    return true;
  } catch (err) {
    console.error("Error adding markers:", err);

    // ❌ notify Unity of failure
    window.Unity?.call(
      JSON.stringify({ type: "markersAdded", success: false, error: String(err) })
    );

    return false;
  }
};

  const removeMarker = (id: string) => {
    if (markersRef.current[id]) {
      markersRef.current[id].remove();
      delete markersRef.current[id];
    }
  };

  // --- ROUTE WITH POINT MARKERS ---
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

  // --- HANDLE UNITY MESSAGES ---
  const handleUnityMessage = (msg: string) => {
    try {
      const data = JSON.parse(msg);
      if (data.action === "add" && Array.isArray(data.markers)) {
        addMarkers(data.markers);
      } else if (data.action === "remove" && typeof data.id === "string") {
        removeMarker(data.id);
      } else if (data.action === "route" && Array.isArray(data.points)) {
        addRoute(data.points);
      }
    } catch (e) {
      console.error("Invalid Unity message", e);
    }
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

    // Show 3D objects when zoomed in
    map.on("zoom", () => {
      if (map.getZoom() > 15) {
        map.setConfigProperty("basemap", "show3dObjects", true);
      } else {
        map.setConfigProperty("basemap", "show3dObjects", false);
      }
    });

    // --- Geolocate Control ---
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.addControl(geolocateControl, "bottom-right");

    // MutationObserver to style the Geolocate button
    const observer = new MutationObserver(() => {
      const button = document.querySelector(".mapboxgl-ctrl-geolocate") as HTMLElement;
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
    window.handleUnityMessage = handleUnityMessage;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
      routePointMarkersRef.current = [];
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-0">
      <div ref={mapContainer} className="w-full h-full" />

      {/* AR Mode Button */}
      <button
        onClick={() => window.Unity?.call(JSON.stringify({ type: "activateAR" }))}
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
