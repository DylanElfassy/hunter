"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import treasureImg from "../assets/Treasure_Point_1.png";
import type { StaticImageData } from "next/image";
import treasureImg_2 from "../assets/Treasure_Point_2.png";
import treasureImg_3 from "../assets/Treasure_Point_3.png";

mapboxgl.accessToken = "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [2.2880, 48.857], // Shifted left of Eiffel Tower
      zoom: 15.8,
      pitch: 65,
      bearing: -50,
      interactive: false,
      antialias: true,
    });

    map.on("style.load", () => {
      console.log("🗺️ Map style loaded");

      // Map visual config
      map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
      map.setConfigProperty("basemap", "showPlaceLabels", false);
      map.setConfigProperty("basemap", "lightPreset", "dawn");

      // Treasure points
      const treasurePoints: { coords: [number, number]; img: StaticImageData }[] = [
        { coords: [2.2915, 48.8545], img: treasureImg },
  { coords: [2.2835, 48.8545], img: treasureImg_2 },      // same vertical, more left horizontally
        { coords: [2.29, 48.868], img: treasureImg_3 },
      ];

      treasurePoints.forEach(({ coords, img }) => {
        const el = document.createElement("div");
        el.style.width = "150px";
        el.style.height = "150px";
        el.style.backgroundImage = `url(${img.src})`;
        el.style.backgroundSize = "contain";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
        el.style.position = "absolute";
        el.style.top = "0px";
        el.style.pointerEvents = "none";
        el.style.zIndex = "9999";

        new mapboxgl.Marker(el, {
          offset: [0, -30],
        })
          .setLngLat(coords as mapboxgl.LngLatLike)
          .addTo(map);
      });
    });

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  // Return JSX for the map container div with fixed height so map shows
  return (
    <div className="absolute w-full h-full z-0">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapBackground;
