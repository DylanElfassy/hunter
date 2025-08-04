 "use client";

import dynamic from "next/dynamic";

// Dynamically import the MapBackground (since it uses `useEffect`)
const MapBackground2 = dynamic(() => import("@/components/MapBackground_2"), {
  ssr: false, // Prevent SSR since mapbox-gl uses window
});

export default function MapOnlyPage() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <MapBackground2 />
    </main>
  );
}