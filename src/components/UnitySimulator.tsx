"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    Unity?: { call: (msg: string) => void };
    handleUnityMessage?: (msg: string) => void;
  }
}

const UnitySimulator = () => {
  // Mock Unity listener for testing React → Unity
  useEffect(() => {
    window.Unity = {
      call: (msg) => console.log("React → Unity:", msg),
    };
  }, []);

  // Sample markers (no imgUrl now)
  const sampleMarkers = [
    { id: "sim1", coords: [-73.9690, 40.7644] },
    { id: "sim2", coords: [-73.980, 40.770] },
  ];

  const sendAddMarkers = () => {
    window.handleUnityMessage?.(
      JSON.stringify({ action: "add", markers: sampleMarkers })
    );
    var js =    JSON.stringify({ action: "add", markers: sampleMarkers });
    console.log(js);
    console.log("➡️ Sent markers to MapBackground2:", sampleMarkers);
  };

  const sendRemoveMarker = (id: string) => {
    window.handleUnityMessage?.(
      JSON.stringify({ action: "remove", id })
    );
    console.log(`➡️ Sent remove marker: ${id}`);
  };

  // --- New: Send route / direction test ---
  const sendRouteTest = () => {
    const routePoints = [
      { coords: [-73.9690, 40.7644] },
      { coords: [-73.971, 40.766] },
      { coords: [-73.975, 40.768] },
      { coords: [-73.980, 40.770] },
    ];

    window.handleUnityMessage?.(
      JSON.stringify({ action: "route", points: routePoints })
    );
    console.log("➡️ Route test sent to MapBackground2");
  };

  return (
    <div className="p-4 space-y-2 border rounded bg-gray-100">
      <h3 className="font-bold">Unity Simulator</h3>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={sendAddMarkers}
      >
        Add Sample Markers
      </button>

      {sampleMarkers.map((m) => (
        <button
          key={m.id}
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => sendRemoveMarker(m.id)}
        >
          Remove {m.id}
        </button>
      ))}

      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={sendRouteTest}
      >
        Test Route / Direction
      </button>
    </div>
  );
};

export default UnitySimulator;
