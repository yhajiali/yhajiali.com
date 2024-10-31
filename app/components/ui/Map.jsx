"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function Map({ lng, lat, zoom = 5, pitch = 30, time = null }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { resolvedTheme } = useTheme();
  let mapTheme;
  mapTheme = resolvedTheme === "dark" ? "night" : "light";

  if (time) {
    mapTheme = time;
  }

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
    });

    // set config properties
    map.current.on("style.load", () => {
      map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
      map.current.setPadding({ left: 100 });

      const el = document.createElement("span");
      el.className = "map-marker";

      new mapboxgl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(map.current);
    });
  });

  return (
    <div className="overflow-clip rounded-xl border dark:border-background-secondary-dark h-48 w-full shadow-lg">
      <div ref={mapContainer} className="map-container size-full" />
    </div>
  );
}
