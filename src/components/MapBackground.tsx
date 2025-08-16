// "use client";

// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
// import treasureImg from "../assets/Treasure1.1.png";
// import type { StaticImageData } from "next/image";
// import treasureImg_2 from "../assets/XP2.png";
// import treasureImg_3 from "../assets/XP3.png";
// import treasureImg_4 from "../assets/XP4.png";
// import treasureImg_5 from "../assets/Treasure2.2.png";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

// const MapBackground = () => {
//   const mapContainer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     const isMobile = window.innerWidth < 768;
//     const centerCoords = [-73.976, 40.769];

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/standard",
//       center: centerCoords as mapboxgl.LngLatLike,
//       zoom: 15.28,
//       pitch: 75,
//       bearing: -110,
//       interactive: true,
//       antialias: true,
//     });

//     let animationFrameId: number;
//     let startTimeout: NodeJS.Timeout;
//     let bearing = -110;

//     const animate = () => {
//       bearing += 0.3;
//       map.setBearing(bearing % 360);
//       animationFrameId = requestAnimationFrame(animate);
//     };

 

//     map.on("style.load", () => {
//       console.log("🗺️ Map style loaded");

//       map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
//       map.setConfigProperty("basemap", "showPlaceLabels", false);
//       map.setConfigProperty("basemap", "showRoadLabels", false);
//       map.setConfigProperty("basemap", "showTransitLabels", false);
//       map.setConfigProperty("basemap", "lightPreset", "dusk");
//       map.setConfigProperty("basemap", "show3dObjects", true);

//       startTimeout = setTimeout(() => {
//         animate();
//       }, 5000);

//         const altitude = 200; // meters above ground

//       const treasurePoints: { coords: [number, number]; img: StaticImageData }[] = isMobile
//         ? [
//             { coords: [-73.9690, 40.7644], img: treasureImg },
//             { coords: [-73.9677, 40.7723], img: treasureImg_2 },
//             { coords: [-73.9774, 40.7794], img: treasureImg_5 },
//             { coords: [-73.9752, 40.758], img: treasureImg_4 },
//             { coords: [-73.9862, 40.7656], img: treasureImg },
//             { coords: [-73.9818, 40.7740], img: treasureImg_4 },
//             { coords: [-73.9785, 40.7639], img: treasureImg_3 },
//             { coords: [-73.9665, 40.7676], img: treasureImg_3 },
//             { coords: [-73.9707, 40.7842], img: treasureImg_4 },
//           ]
//         : [
//             // Manhattan
//             { coords: [-73.9690, 40.7644], img: treasureImg },
//             { coords: [-73.9677, 40.7723], img: treasureImg_2 },
//             { coords: [-73.9774, 40.7794], img: treasureImg_5 },
//             { coords: [-73.9752, 40.758], img: treasureImg_4 },
//             { coords: [-73.9862, 40.7656], img: treasureImg },
//             { coords: [-73.9818, 40.7740], img: treasureImg_2 },
//             { coords: [-73.9785, 40.7639], img: treasureImg_3 },
//             { coords: [-73.9649, 40.7676], img: treasureImg_4 },

//             // Brooklyn
//             // { coords: [-73.9442, 40.6782], img: treasureImg_2 },
//             // { coords: [-73.9810, 40.6450], img: treasureImg_3 },
//             // { coords: [-73.9500, 40.6820], img: treasureImg_4 },

//             // Queens
//             // { coords: [-73.8500, 40.7420], img: treasureImg_5 },
//             // { coords: [-73.8700, 40.7500], img: treasureImg_2 },
//             // { coords: [-73.8200, 40.7350], img: treasureImg },

//             // Bronx
//             // { coords: [-73.8900, 40.8500], img: treasureImg_3 },
//             // { coords: [-73.8800, 40.8400], img: treasureImg_4 },
//             // { coords: [-73.9000, 40.8600], img: treasureImg_5 },

//             // Staten Island
//           //   { coords: [-74.1200, 40.5795], img: treasureImg_2 },
//           //   { coords: [-74.1500, 40.5700], img: treasureImg_3 },
//           //   { coords: [-74.1000, 40.5800], img: treasureImg_4 },
//           ];

//       treasurePoints.forEach(({ coords, img }) => {
//         const el = document.createElement("div");
//         el.style.width = isMobile ? "90px" : "125px";
//         el.style.height = isMobile ? "90px" : "125px";
//         el.style.backgroundImage = `url(${img.src})`;
//         el.style.backgroundSize = "contain";
//         el.style.backgroundRepeat = "no-repeat";
//         el.style.backgroundPosition = "center";
//         el.style.position = "absolute";
//         el.style.top = "0px";
//         el.style.pointerEvents = "none";
//         el.style.zIndex = "9999";

//         new mapboxgl.Marker(el, {
//           offset: [0, -50],
//         })
//           .setLngLat(coords as mapboxgl.LngLatLike)
//           .addTo(map);
//       });
//     });

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       clearTimeout(startTimeout);
//       map.remove();
//     };
//   }, []);

//   return (
//     <div className="absolute w-full h-full z-0">
//       <div ref={mapContainer} className="w-full h-full" />
//     </div>
//   );
// };

// export default MapBackground;
"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import type { StaticImageData } from "next/image";
import type { FeatureCollection, Point } from "geojson";

// Images
import treasureImg from "../assets/Treasure1.1.png";
import treasureImg_2 from "../assets/XP2.png";
import treasureImg_3 from "../assets/XP3.png";
import treasureImg_4 from "../assets/XP4.png";
import treasureImg_5 from "../assets/Treasure2.2.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    const isMobile = window.innerWidth < 768;
    const centerCoords = [-73.976, 40.766];

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: centerCoords as mapboxgl.LngLatLike,
      zoom: 15.25,
      pitch: 75,
      bearing: -150,
      interactive: true,
      antialias: true,
    });

    let animationFrameId: number;
    let startTimeout: NodeJS.Timeout;
    let bearing = -150;

    const animate = () => {
      bearing += 0.3;
      map.setBearing(bearing % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    map.on("style.load", () => {
      // Hide default labels
      map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
      map.setConfigProperty("basemap", "showPlaceLabels", false);
      map.setConfigProperty("basemap", "showRoadLabels", false);
      map.setConfigProperty("basemap", "showTransitLabels", false);

      // Style settings
      map.setConfigProperty("basemap", "lightPreset", "dusk");
      map.setConfigProperty("basemap", "show3dObjects", true);

      // Start rotation after delay
      startTimeout = setTimeout(animate, 8000);

      // -------------------------------
      // Treasure Data
      // -------------------------------
      const treasurePoints: { coords: [number, number]; img: StaticImageData }[] =
        [
          { coords: [-73.9690, 40.7644], img: treasureImg },
          { coords: [-73.9677, 40.7723], img: treasureImg_2 },
          { coords: [-73.9774, 40.7794], img: treasureImg_5 },
          { coords: [-73.9752, 40.7580], img: treasureImg_4 },
          { coords: [-73.9862, 40.7656], img: treasureImg },
          { coords: [-73.9818, 40.7740], img: treasureImg_2 },
          { coords: [-73.9785, 40.7639], img: treasureImg_3 },
          { coords: [-73.9649, 40.7676], img: treasureImg_4 },
          { coords: [-73.9442, 40.6782], img: treasureImg_2 },
          { coords: [-73.9810, 40.6450], img: treasureImg_3 },
          { coords: [-73.9500, 40.6820], img: treasureImg_4 },
          { coords: [-73.8500, 40.7420], img: treasureImg_5 },
          { coords: [-73.8700, 40.7500], img: treasureImg_2 },
          { coords: [-73.8200, 40.7350], img: treasureImg },
          { coords: [-73.8900, 40.8500], img: treasureImg_3 },
          { coords: [-73.8800, 40.8400], img: treasureImg_4 },
          { coords: [-73.9000, 40.8600], img: treasureImg_5 },
          { coords: [-74.1200, 40.5795], img: treasureImg_2 },
          { coords: [-74.1500, 40.5700], img: treasureImg_3 },
          { coords: [-74.1000, 40.5800], img: treasureImg_4 },
        ];

      const treasureGeoJSON: FeatureCollection<Point> = {
        type: "FeatureCollection",
        features: treasurePoints.map(({ coords, img }) => ({
          type: "Feature",
          properties: { img: img.src },
          geometry: { type: "Point", coordinates: coords },
        })),
      };

      map.addSource("treasures", {
        type: "geojson",
        data: treasureGeoJSON,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "treasures",
        filter: ["has", "point_count"],
        paint: { "circle-color": "#FFD700", "circle-radius": 20 },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "treasures",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 14,
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "symbol",
        source: "treasures",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "icon-image": ["concat", ["get", "img"], ""],
          "icon-size": isMobile ? 0.7 : 0.8,
        },
      });

      // Load images, then wait for idle
      const uniqueImages = [...new Set(treasurePoints.map((p) => p.img.src))];
      let loadedImages = 0;

      uniqueImages.forEach((src) => {
        map.loadImage(src, (error, image) => {
          if (error) throw error;
          if (!map.hasImage(src) && image) {
            map.addImage(src, image);
          }
          loadedImages++;
          if (loadedImages === uniqueImages.length) {
            // All images loaded → wait for map idle
            map.once("idle", () => {
              setTimeout(() => setLoading(false), 500); // short delay
            });
          }
        });
      });
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(startTimeout);
      map.remove();
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-0">
      {loading && (
  <div className="flex items-center justify-center w-full h-full bg-black text-white z-10 absolute transition-opacity duration-700">
    <span className="font-Unbounded text-3xl font-extrabold tracking-wide animate-pulse">
      HUNTERZ
    </span>
  </div>
)}

      <div
        ref={mapContainer}
        className={`w-full h-full transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default MapBackground;
