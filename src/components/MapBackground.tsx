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


// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import type { StaticImageData } from "next/image";
// import type { FeatureCollection, Point } from "geojson";

// // Images
// import treasureImg from "../assets/Treasure1.1.png";
// import treasureImg_2 from "../assets/XP2.png";
// import treasureImg_3 from "../assets/XP3.png";
// import treasureImg_4 from "../assets/XP4.png";
// import treasureImg_5 from "../assets/Treasure2.2.png";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

// const MapBackground = () => {
//   const mapContainer = useRef<HTMLDivElement | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     const isMobile = window.innerWidth < 768;
//     const centerCoords = [-73.976, 40.766];

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/standard",
//       center: centerCoords as mapboxgl.LngLatLike,
//       zoom: 15.25,
//       pitch: 75,
//       bearing: -150,
//       interactive: true,
//       antialias: true,
//     });

//     let animationFrameId: number;
//     let startTimeout: NodeJS.Timeout;
//     let bearing = -150;

//     const animate = () => {
//       bearing += 0.2;
//       map.setBearing(bearing % 360);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     map.on("style.load", () => {
//       // Hide default labels
//       map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
//       map.setConfigProperty("basemap", "showPlaceLabels", false);
//       map.setConfigProperty("basemap", "showRoadLabels", false);
//       map.setConfigProperty("basemap", "showTransitLabels", false);

//       // Style settings
//       map.setConfigProperty("basemap", "lightPreset", "dusk");
//       map.setConfigProperty("basemap", "show3dObjects", true);

//       // Start rotation after delay
//       startTimeout = setTimeout(animate, 8000);

//       // -------------------------------
//       // Treasure Data
//       // -------------------------------
//       const treasurePoints: { coords: [number, number]; img: StaticImageData }[] =
//         [
//           { coords: [-73.9690, 40.7644], img: treasureImg },
//           { coords: [-73.9677, 40.7723], img: treasureImg_2 },
//           { coords: [-73.9774, 40.7794], img: treasureImg_5 },
//           { coords: [-73.9752, 40.7580], img: treasureImg_4 },
//           { coords: [-73.9862, 40.7656], img: treasureImg },
//           { coords: [-73.9818, 40.7740], img: treasureImg_2 },
//           { coords: [-73.9785, 40.7639], img: treasureImg_3 },
//           { coords: [-73.9649, 40.7676], img: treasureImg_4 },
//           { coords: [-73.9442, 40.6782], img: treasureImg_2 },
//           { coords: [-73.9810, 40.6450], img: treasureImg_3 },
//           { coords: [-73.9500, 40.6820], img: treasureImg_4 },
//           { coords: [-73.8500, 40.7420], img: treasureImg_5 },
//           { coords: [-73.8700, 40.7500], img: treasureImg_2 },
//           { coords: [-73.8200, 40.7350], img: treasureImg },
//           { coords: [-73.8900, 40.8500], img: treasureImg_3 },
//           { coords: [-73.8800, 40.8400], img: treasureImg_4 },
//           { coords: [-73.9000, 40.8600], img: treasureImg_5 },
//           { coords: [-74.1200, 40.5795], img: treasureImg_2 },
//           { coords: [-74.1500, 40.5700], img: treasureImg_3 },
//           { coords: [-74.1000, 40.5800], img: treasureImg_4 },
//         ];

//       const treasureGeoJSON: FeatureCollection<Point> = {
//         type: "FeatureCollection",
//         features: treasurePoints.map(({ coords, img }) => ({
//           type: "Feature",
//           properties: { img: img.src },
//           geometry: { type: "Point", coordinates: coords },
//         })),
//       };

//       map.addSource("treasures", {
//         type: "geojson",
//         data: treasureGeoJSON,
//         cluster: true,
//         clusterMaxZoom: 14,
//         clusterRadius: 50,
//       });

//       map.addLayer({
//         id: "clusters",
//         type: "circle",
//         source: "treasures",
//         filter: ["has", "point_count"],
//         paint: { "circle-color": "#FFD700", "circle-radius": 20 },
//       });

//       map.addLayer({
//         id: "cluster-count",
//         type: "symbol",
//         source: "treasures",
//         filter: ["has", "point_count"],
//         layout: {
//           "text-field": "{point_count_abbreviated}",
//           "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
//           "text-size": 14,
//         },
//       });

//       map.addLayer({
//         id: "unclustered-point",
//         type: "symbol",
//         source: "treasures",
//         filter: ["!", ["has", "point_count"]],
//         layout: {
//           "icon-image": ["concat", ["get", "img"], ""],
//           "icon-size": isMobile ? 0.7 : 0.8,
//         },
//       });

//       // Load images, then wait for idle
//       const uniqueImages = [...new Set(treasurePoints.map((p) => p.img.src))];
//       let loadedImages = 0;

//       uniqueImages.forEach((src) => {
//         map.loadImage(src, (error, image) => {
//           if (error) throw error;
//           if (!map.hasImage(src) && image) {
//             map.addImage(src, image);
//           }
//           loadedImages++;
//           if (loadedImages === uniqueImages.length) {
//             // All images loaded → wait for map idle
//             map.once("idle", () => {
//               setTimeout(() => setLoading(false), 500); // short delay
//             });
//           }
//         });
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
//       {loading && (
//   <div className="flex items-center justify-center w-full h-full bg-black text-white z-10 absolute transition-opacity duration-700">
//     <span className="font-Unbounded text-3xl font-extrabold tracking-wide animate-pulse">
//       HUNTERZ
//     </span>
//   </div>
// )}

//       <div
//         ref={mapContainer}
//         className={`w-full h-full transition-opacity duration-700 ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//       />
//     </div>
//   );
// };

// export default MapBackground;

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

// const MapBackground = () => {
//   const mapContainer = useRef<HTMLDivElement | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/standard",
//       center: [-73.976, 40.766],
//       zoom: 15.25,
//       pitch: 75,
//       bearing: -150,
//       interactive: true,
//       antialias: true,
//     });

//     // -----------------------------
//     // All treasure coordinates
//     // -----------------------------
//     const treasureCoords: [number, number][] = [
//       [-73.9690, 40.7644],
//       [-73.9677, 40.7723],
//       [-73.9774, 40.7794],
//       [-73.9752, 40.7580],
//       [-73.9862, 40.7656],
//       [-73.9818, 40.7740],
//       [-73.9785, 40.7639],
//       [-73.9649, 40.7676],
//       [-73.9442, 40.6782],
//       [-73.9810, 40.6450],
//       [-73.9500, 40.6820],
//       [-73.8500, 40.7420],
//       [-73.8700, 40.7500],
//       [-73.8200, 40.7350],
//       [-73.8900, 40.8500],
//       [-73.8800, 40.8400],
//       [-73.9000, 40.8600],
//       [-74.1200, 40.5795],
//       [-74.1500, 40.5700],
//       [-74.1000, 40.5800],
//     ];

//     // -----------------------------
//     // Model configurations
//     // -----------------------------
//    type ModelType = "Dollar_Box_Open" | "Black_XP" | "Black_XP_2" | "Pink_XP" | "Blue_XP";

// const modelConfigs: {
//   [key in ModelType]: { url: string; scaleMultiplier: number; rotate: [number, number, number] };
// } = {
//   Dollar_Box_Open: {
//     url: "/models/Dollar_Box_Open.glb",
//     scaleMultiplier: 20,
//     rotate: [Math.PI / 2, Math.PI, 0],
//   },
//   Black_XP: {
//     url: "/models/BlackXP.glb",
//     scaleMultiplier: 20,
//     rotate: [Math.PI / 2, Math.PI, 0],
//   },
//   Black_XP_2: {
//     url: "/models/Black_XP_3.glb", // add your model file here
//     scaleMultiplier: 900,           // adjust scale as needed
//     rotate: [Math.PI / 2, Math.PI, 0], // adjust rotation if needed
//   },
//     Pink_XP: {
//     url: "/models/XP_Pink_V2.glb", // add your model file here
//     scaleMultiplier: 900,           // adjust scale as needed
//     rotate: [Math.PI / 2, Math.PI, 0], // adjust rotation if needed
//   },
//     Blue_XP: {
//     url: "/models/XP_Blue_V2.glb", // add your model file here
//     scaleMultiplier: 900,           // adjust scale as needed
//     rotate: [Math.PI / 2, Math.PI, 0], // adjust rotation if needed
//   },
// };


//     // -----------------------------
//     // Build models array with random type
//     // -----------------------------
//     const models = treasureCoords.map((coords, idx) => {
// const types: ModelType[] = ["Dollar_Box_Open", "Black_XP", "Black_XP_2", "Pink_XP", "Blue_XP"];
// const type: ModelType = types[Math.floor(Math.random() * types.length)];    
// console.log("Randomly selected type:", type);

// const cfg = modelConfigs[type];
//       return {
//         id: `3d-model-${idx}`,
//         origin: coords,
//         altitude: 120,
//         url: cfg.url,
//         scaleMultiplier: cfg.scaleMultiplier,
//         rotate: cfg.rotate,
//       };
//     });

//     // -----------------------------
//     // Function to create a custom layer per model
//     // -----------------------------
    
//     const createCustomLayer = (
//   map: mapboxgl.Map,
//   model: typeof models[number]
// ): mapboxgl.CustomLayerInterface => {
//   const camera = new THREE.Camera();
//   const scene = new THREE.Scene();

//   // -----------------------------
//   // Lighting
//   // -----------------------------
//   const light1 = new THREE.DirectionalLight(0xffffff, 1);
//   light1.position.set(0, -70, 100).normalize();
//   scene.add(light1);

//   const light2 = new THREE.DirectionalLight(0xffffff, 1);
//   light2.position.set(0, 70, 100).normalize();
//   scene.add(light2);

//   // -----------------------------
//   // Transform
//   // -----------------------------
//   const merc = mapboxgl.MercatorCoordinate.fromLngLat(model.origin, model.altitude);
//   const transform = {
//     translateX: merc.x,
//     translateY: merc.y,
//     translateZ: merc.z,
//     rotateX: model.rotate[0],
//     rotateY: model.rotate[1],
//     rotateZ: model.rotate[2],
//     scale: merc.meterInMercatorCoordinateUnits() * model.scaleMultiplier,
//   };

//   // -----------------------------
//   // Load model
//   // -----------------------------
//   const loader = new GLTFLoader();
//   loader.load(
//     model.url,
//     (gltf) => {
//       const obj = gltf.scene;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       (obj as any).transform = transform;

//       // ✅ Make sure both sides render
//       obj.traverse((child) => {
//         if ((child as THREE.Mesh).isMesh) {
//           const mesh = child as THREE.Mesh;
//           const mat = mesh.material;
//           if (Array.isArray(mat)) {
//             mat.forEach((m) => (m.side = THREE.DoubleSide));
//           } else {
//             mat.side = THREE.DoubleSide;
//           }
//           mesh.geometry.computeVertexNormals();
//         }
//       });

//       scene.add(obj);
//     },
//     undefined,
//     (err) => console.error("Error loading model:", err)
//   );

//   // -----------------------------
//   // Renderer
//   // -----------------------------
//   const renderer = new THREE.WebGLRenderer({
//     canvas: map.getCanvas(),
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     context: (map as any).painter.context.gl,
//     antialias: true,
//   });
//   renderer.autoClear = false;

//   // -----------------------------
//   // Return custom layer
//   // -----------------------------
//   return {
//     id: model.id,
//     type: "custom",
//     renderingMode: "3d",
//     onAdd: () => {},
//     render: (_gl, matrix) => {
//       const m = new THREE.Matrix4().fromArray(matrix);

//       scene.traverse((obj) => {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         if ((obj as any).transform) {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           const t = (obj as any).transform;

//           const rotationX = new THREE.Matrix4().makeRotationAxis(
//             new THREE.Vector3(1, 0, 0),
//             t.rotateX
//           );
//           const rotationY = new THREE.Matrix4().makeRotationAxis(
//             new THREE.Vector3(0, 1, 0),
//             t.rotateY
//           );
//           const rotationZ = new THREE.Matrix4().makeRotationAxis(
//             new THREE.Vector3(0, 0, 1),
//             t.rotateZ
//           );

//           const l = new THREE.Matrix4()
//             .makeTranslation(t.translateX, t.translateY, t.translateZ)
//             .scale(new THREE.Vector3(t.scale, -t.scale, t.scale))
//             .multiply(rotationX)
//             .multiply(rotationY)
//             .multiply(rotationZ);

//           camera.projectionMatrix = m.clone().multiply(l);
//         }
//       });

//       renderer.resetState();
//       renderer.render(scene, camera);
//       map.triggerRepaint();
//     },
//   };
// };


//     // -----------------------------
//     // Animate map bearing
//     // -----------------------------
//     let animationFrameId: number;
//     let startTimeout: NodeJS.Timeout;
//     let bearing = -150;

//     const animate = () => {
//       bearing += 0.2;
//       map.setBearing(bearing % 360);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     map.on("style.load", () => {
//       map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
//       map.setConfigProperty("basemap", "showPlaceLabels", false);
//       map.setConfigProperty("basemap", "showRoadLabels", false);
//       map.setConfigProperty("basemap", "showTransitLabels", false);

//       map.setConfigProperty("basemap", "lightPreset", "dusk");
//       map.setConfigProperty("basemap", "show3dObjects", true);

//       startTimeout = setTimeout(animate, 8000);
//       setTimeout(() => setLoading(false), 5000);

//       models.forEach((m) => {
//         const layer = createCustomLayer(map, m);
//         map.addLayer(layer);
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
//       {loading && (
//         <div className="flex items-center justify-center w-full h-full bg-black text-white z-10 absolute transition-opacity duration-700">
//           <span className="font-Unbounded text-3xl font-extrabold tracking-wide animate-pulse">
//             HUNTERZ
//           </span>
//         </div>
//       )}
//       <div
//         ref={mapContainer}
//         className={`w-full h-full transition-opacity duration-700 ${
//           loading ? "opacity-0" : "opacity-100"
//         }`}
//       />
//     </div>
//   );
// };

// export default MapBackground;

"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsb3UyNzE5OTUiLCJhIjoiY21iZm1odjZtMmpmdTJrczFiZjI5dXJ6OCJ9.xrSFSyJODlBBw8OlBdSpSg";

const MapBackground = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard",
      center: [-73.976, 40.766],
      zoom: 15.25,
      pitch: 75,
      bearing: -150,
      interactive: true,
      antialias: true,
    });

    // -----------------------------
    // Treasure coordinates
    // -----------------------------
    const treasureCoords: [number, number][] = [
      [-73.969, 40.7644],
      [-73.9677, 40.7723],
      // [-73.9774, 40.7794],
      // [-73.9752, 40.7580],
      [-73.9862, 40.7656],
      [-73.9818, 40.7740],
      [-73.9785, 40.7639],
      // [-73.9649, 40.7676],
      // [-73.9442, 40.6782],
      // [-73.9810, 40.6450],
      // [-73.9500, 40.6820],
      // [-73.8500, 40.7420],
      // [-73.8700, 40.7500],
      // [-73.8200, 40.7350],
      // [-73.8900, 40.8500],
      // [-73.8800, 40.8400],
      // [-73.9000, 40.8600],
      // [-74.1200, 40.5795],
      // [-74.1500, 40.5700],
      // [-74.1000, 40.5800],
    ];

    // -----------------------------
    // Model configurations
    // -----------------------------
    type ModelType = "Dollar_Box_Open" | "Black_XP_2" | "Pink_XP" | "Blue_XP";

    const modelConfigs: {
      [key in ModelType]: {
        url: string;
        scaleMultiplier: number;
        rotate: [number, number, number];
      };
    } = {
      Dollar_Box_Open: {
        url: "/models/XP_Blue_V2-opt.glb",
        scaleMultiplier: 900,
        rotate: [Math.PI / 2, Math.PI, 0],
      },
      Black_XP_2: {
        url: "/models/Black_XP_3.glb",
        scaleMultiplier: 900,
        rotate: [Math.PI / 2, Math.PI, 0],
      },
      Pink_XP: {
        url: "/models/XP_Pink_NEW.glb",
        scaleMultiplier: 900,
        rotate: [Math.PI / 2, Math.PI, 0],
      },
      Blue_XP: {
        url: "/models/XP_Blue_V2.glb",
        scaleMultiplier: 900,
        rotate: [Math.PI / 2, Math.PI, 0],
      },
    };

    // -----------------------------
    // Build models array
    // -----------------------------
    const models = treasureCoords.map((coords, idx) => {
      const types: ModelType[] = [
        "Dollar_Box_Open",
        "Black_XP_2",
        "Pink_XP",
        "Blue_XP",
      ];
      // const type = types[Math.floor(Math.random() * types.length)];
      // const type = types[1];      
const type = types[[1, 2, 3][Math.floor(Math.random() * 3)]];

      const cfg = modelConfigs[type];

      return {
        id: `3d-model-${idx}`,
        origin: coords,
        altitude: 150,
        url: cfg.url,
        scaleMultiplier: cfg.scaleMultiplier,
        rotate: cfg.rotate,
      };
    });

    // -----------------------------
    // Three.js setup
    // -----------------------------
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    let renderer: THREE.WebGLRenderer;

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, -70, 100).normalize();
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(0, 70, 100).normalize();
    scene.add(light2);

    // Transform helper
    const makeTransform = (model: (typeof models)[number]) => {
      const merc = mapboxgl.MercatorCoordinate.fromLngLat(
        model.origin,
        model.altitude
      );

        const scale = merc.meterInMercatorCoordinateUnits() * 600;


      return {
        translateX: merc.x,
        translateY: merc.y,
        translateZ: merc.z,
        rotateX: model.rotate[0],
        rotateY: model.rotate[1],
        rotateZ: model.rotate[2],
        // scale: merc.meterInMercatorCoordinateUnits() * model.scaleMultiplier,
        scale,
      };
    };

    // Load model
    // const loadModel = (model: (typeof models)[number]) => {
    //   console.log("Loading model:", model);
    //   const loader = new GLTFLoader();
    //   loader.load(
    //     model.url,
    //     (gltf) => {
    //       const obj = gltf.scene;
    //       (obj as any).transform = makeTransform(model);

    //       obj.traverse((child) => {
    //         if ((child as THREE.Mesh).isMesh) {
    //           const mesh = child as THREE.Mesh;
    //           const mat = mesh.material;
    //           if (Array.isArray(mat)) {
    //             mat.forEach((m) => (m.side = THREE.DoubleSide));
    //           } else {
    //             mat.side = THREE.DoubleSide;
    //           }
    //           mesh.geometry.computeVertexNormals();
    //         }
    //       });

    //       scene.add(obj);
    //     },
    //     undefined,
    //     (err) => console.error("Error loading model:", err)
    //   );
    // };


    // -----------------------------
// Load model with baked transform
// -----------------------------
// const loadModel = (model: (typeof models)[number]) => {
//   console.log("Loading model:", model);
//   const loader = new GLTFLoader();

//   loader.load(
//     model.url,
//     (gltf) => {
//       const obj = gltf.scene;

//       // build transform matrix once
//       const t = makeTransform(model);
//       const objMatrix = new THREE.Matrix4()
//         .makeTranslation(t.translateX, t.translateY, t.translateZ)
//         .scale(new THREE.Vector3(t.scale, -t.scale, t.scale)) // flip Y for mapbox coords
//         .multiply(new THREE.Matrix4().makeRotationX(t.rotateX))
//         .multiply(new THREE.Matrix4().makeRotationY(t.rotateY))
//         .multiply(new THREE.Matrix4().makeRotationZ(t.rotateZ));

//       obj.applyMatrix4(objMatrix); // bake the transform

//       obj.traverse((child) => {
//         if ((child as THREE.Mesh).isMesh) {
//           const mesh = child as THREE.Mesh;
//           const mat = mesh.material;
//           if (Array.isArray(mat)) {
//             mat.forEach((m) => (m.side = THREE.DoubleSide));
//           } else {
//             mat.side = THREE.DoubleSide;
//           }
//           mesh.geometry.computeVertexNormals();
//         }
//       });

//       scene.add(obj);
//     },
//     undefined,
//     (err) => console.error("Error loading model:", err)
//   );
// };

const loadModel = (model: (typeof models)[number]) => {
  console.log("Loading model:", model);
  const loader = new GLTFLoader();

  loader.load(
    model.url,
    (gltf) => {
      const obj = gltf.scene;

      // store transform for use in render
      (obj as any).transform = makeTransform(model);

          // (obj as any).transform.scale *= Math.pow(2, map.getZoom() - 15);

      obj.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const mat = mesh.material;
          if (Array.isArray(mat)) {
            mat.forEach((m) => (m.side = THREE.DoubleSide));
          } else {
            mat.side = THREE.DoubleSide;
          }
          mesh.geometry.computeVertexNormals();
        }
      });

      scene.add(obj);
    },
    undefined,
    (err) => console.error("Error loading model:", err)
  );
};


    // Load all models
    models.forEach(loadModel);

    // -----------------------------
    // Custom Layer
    // -----------------------------
//     const customLayer: mapboxgl.CustomLayerInterface = {
//       id: "3d-models-1",
//       type: "custom",
//       renderingMode: "3d",

//       onAdd: (map) => {
//         renderer = new THREE.WebGLRenderer({
//           canvas: map.getCanvas(),
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           context: (map as any).painter.context.gl,
//           antialias: true,
//         });
//         renderer.autoClear = false;
//       },

//       // render: (_gl, matrix) => {
//       //   const m = new THREE.Matrix4().fromArray(matrix);
//       //   scene.traverse((obj) => {
//       //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       //     if ((obj as any).transform) {
//       //       const t = (obj as any).transform;

//       //       const rotationX = new THREE.Matrix4().makeRotationAxis(
//       //         new THREE.Vector3(1, 0, 0),
//       //         t.rotateX
//       //       );
//       //       const rotationY = new THREE.Matrix4().makeRotationAxis(
//       //         new THREE.Vector3(0, 1, 0),
//       //         t.rotateY
//       //       );
//       //       const rotationZ = new THREE.Matrix4().makeRotationAxis(
//       //         new THREE.Vector3(0, 0, 1),
//       //         t.rotateZ
//       //       );

//       //       const l = new THREE.Matrix4()
//       //         .makeTranslation(t.translateX, t.translateY, t.translateZ)
//       //         .scale(new THREE.Vector3(t.scale, -t.scale, t.scale))
//       //         .multiply(rotationX)
//       //         .multiply(rotationY)
//       //         .multiply(rotationZ);

//       //       camera.projectionMatrix = m.clone().multiply(l);
//       //     }
//       //   });
//       //   renderer.resetState();
//       //   renderer.render(scene, camera);
//       //   map.triggerRepaint();

//       // },
//       render: (_gl, matrix) => {
//   const m = new THREE.Matrix4().fromArray(matrix);

//   scene.traverse((obj) => {
//     if ((obj as any).transform) {
//       const t = (obj as any).transform;

//       const rotationX = new THREE.Matrix4().makeRotationAxis(
//         new THREE.Vector3(1, 0, 0),
//         t.rotateX
//       );
//       const rotationY = new THREE.Matrix4().makeRotationAxis(
//         new THREE.Vector3(0, 1, 0),
//         t.rotateY
//       );
//       const rotationZ = new THREE.Matrix4().makeRotationAxis(
//         new THREE.Vector3(0, 0, 1),
//         t.rotateZ
//       );

//       const l = new THREE.Matrix4()
//         .makeTranslation(t.translateX, t.translateY, t.translateZ)
//         .scale(new THREE.Vector3(t.scale, -t.scale, t.scale))
//         .multiply(rotationX)
//         .multiply(rotationY)
//         .multiply(rotationZ);

//       // bake the final projection into each object’s matrix
//       obj.matrixAutoUpdate = false;
//       obj.matrix.copy(m).multiply(l);
//     }
//   });

//   // render once for the whole scene
//   camera.projectionMatrix = new THREE.Matrix4(); // identity — handled in obj.matrix
//   renderer.resetState();
//   renderer.render(scene, camera);

//   map.triggerRepaint();
// }

//     };

const customLayer: mapboxgl.CustomLayerInterface = {
  id: "3d-models-1",
  type: "custom",
  renderingMode: "3d",

  onAdd: (map) => {
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({
        canvas: map.getCanvas(),
        context: (map as any).painter.context.gl,
        antialias: true,
      });

      // Avoid Safari blowing up GPU memory
      // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.autoClear = false;
    }
  },
      //   onAdd: (map) => {
      //   renderer = new THREE.WebGLRenderer({
      //     canvas: map.getCanvas(),
      //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //     context: (map as any).painter.context.gl,
      //     antialias: true,
      //   });
      //   renderer.autoClear = false;
      // },

  render: (_gl, matrix) => {
    const m = new THREE.Matrix4().fromArray(matrix);

    // Apply transforms per model each frame
    scene.traverse((obj) => {
      if ((obj as any).transform) {
        const t = (obj as any).transform;

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

        obj.matrixAutoUpdate = false;
        obj.matrix.copy(m).multiply(l);
      }
    });

    // Clear & render with reset state
    renderer.resetState();
    camera.projectionMatrix = new THREE.Matrix4(); // identity, since projection baked in obj.matrix
    renderer.render(scene, camera);

    map.triggerRepaint();
  },
};


    // -----------------------------
    // Map events & animation
    // -----------------------------
    let animationFrameId: number;
    let startTimeout: NodeJS.Timeout;
    let bearing = -150;

    const animate = () => {
      bearing += 0.2;
      map.setBearing(bearing % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    map.on("style.load", () => {
      map.setConfigProperty("basemap", "showPointOfInterestLabels", false);
      map.setConfigProperty("basemap", "showPlaceLabels", false);
      map.setConfigProperty("basemap", "showRoadLabels", false);
      map.setConfigProperty("basemap", "showTransitLabels", false);
      map.setConfigProperty("basemap", "lightPreset", "dusk");
      map.setConfigProperty("basemap", "show3dObjects", true);

      startTimeout = setTimeout(animate, 8000);
      setTimeout(() => setLoading(false), 5000);

  //       if (!renderer) {
  //   renderer = new THREE.WebGLRenderer({
  //     canvas: map.getCanvas(),
  //     context: (map as any).painter.context.gl,
  //     antialias: true,
  //   });
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // prevent iOS GPU crash
  //   renderer.autoClear = false;
  // }

      map.addLayer(customLayer);
    });

    // return () => {
    //   cancelAnimationFrame(animationFrameId);
    //   clearTimeout(startTimeout);
    //   map.remove();
    // };
    return () => {
  cancelAnimationFrame(animationFrameId);
  clearTimeout(startTimeout);

  if (map.getLayer("3d-models-1")) {
    map.removeLayer("3d-models-1");
  }
  if (map.getSource("3d-models-1")) {
    map.removeSource("3d-models-1");
  }

  // if (renderer) {
  //   renderer.dispose();
  //   renderer.forceContextLoss?.(); // Safari: ensure GL context released
  //   renderer = undefined as any;
  // }

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
