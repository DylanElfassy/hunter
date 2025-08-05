"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import treasureImg from "../assets/Treasure_1.png";
import type { StaticImageData } from "next/image";
import treasureImg_2 from "../assets/Treasure_Point_2.png";
import treasureImg_3 from "../assets/Treasure_Point_3.png";
import treasureImg_4 from "../assets/Treasure_Point_4.png";

mapboxgl.accessToken = "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const isMobile = window.innerWidth < 768;
    const centerCoords = [-73.976, 40.769];

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: centerCoords as mapboxgl.LngLatLike,
      zoom: 15.28,
      pitch: 75,
      bearing: -110,
      interactive: true,
      antialias: true,
    });

    let animationFrameId: number;
    let startTimeout: NodeJS.Timeout;
    let bearing = -110;

    const animate = () => {
      bearing += 0.5;
      map.setBearing(bearing % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    map.on("style.load", () => {
      console.log("🗺️ Map style loaded");

      map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
      map.setConfigProperty("basemap", "showPlaceLabels", false);
      map.setConfigProperty("basemap", "showRoadLabels", true);
      map.setConfigProperty("basemap", "showTransitLabels", false);
      map.setConfigProperty("basemap", "lightPreset", "dusk");
      map.setConfigProperty("basemap", "show3dObjects", true);

      // ⏱️ Start the bearing animation after 5 seconds
      startTimeout = setTimeout(() => {
        animate();
      }, 5000);

      const treasurePoints: { coords: [number, number]; img: StaticImageData }[] = isMobile
        ? [
            // { coords: [-73.9658, 40.7720], img: treasureImg },
            // { coords: [-73.9677, 40.7723], img: treasureImg_2 },
            // { coords: [-73.9638, 40.7683], img: treasureImg_3 },
            { coords: [-73.9690, 40.7644], img: treasureImg },
            { coords: [-73.9677, 40.7723], img: treasureImg_2 },
            { coords: [-73.9774, 40.7794], img: treasureImg_2 },
            { coords: [-73.9752, 40.758], img: treasureImg_4 },
            { coords: [-73.9862, 40.7656], img: treasureImg },
            { coords: [-73.9818, 40.7740], img: treasureImg_4 },
            { coords: [-73.9785, 40.7639], img: treasureImg_3 },
          ]
        : [
            { coords: [-73.9690, 40.7644], img: treasureImg },
            { coords: [-73.9677, 40.7723], img: treasureImg_2 },
            { coords: [-73.9774, 40.7794], img: treasureImg_2 },
            { coords: [-73.9752, 40.758], img: treasureImg_4 },
            { coords: [-73.9862, 40.7656], img: treasureImg },
            { coords: [-73.9818, 40.7740], img: treasureImg_4 },
            { coords: [-73.9785, 40.7639], img: treasureImg_3 },

          ];

      treasurePoints.forEach(({ coords, img }) => {
        const el = document.createElement("div");
        el.style.width = isMobile ? "125px" : "150px";
        el.style.height = isMobile ? "125px" : "150px";
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

    // ✅ Return a cleanup function to stop animation and remove the map
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(startTimeout);
      map.remove();
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-0">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapBackground;
