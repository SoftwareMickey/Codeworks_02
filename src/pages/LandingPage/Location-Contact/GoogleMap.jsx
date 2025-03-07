import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import lemac from './le-mac.jpeg'

export default function MapComponent(){
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const popupRef = useRef(null); // To manage the popup

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmF2ZW4yNTQiLCJhIjoiY203dWl6NWxhMDEyZjJuc2FnanhqZzA3bCJ9.c0JOxj_wBxe_MflmxUIRrw";

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [36.817223, -1.2619547], // Longitude first, then Latitude
        zoom: 12,
      });

      // Create a marker
      const marker = new mapboxgl.Marker()
        .setLngLat([36.817223, -1.2619547])
        .addTo(mapRef.current);

      // Create a popup for the image
      popupRef.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25,
      }).setHTML(
        `<div style="text-align: center;">
          <img src=${lemac} 
          alt="Le-Mac" width="200" height="200" 
          style="border-radius: 5px;"/>
          <p style="margin: 5px 0;">Nairobi, Kenya</p>
        </div>`
      );

      // Show popup on hover
      marker.getElement().addEventListener("mouseenter", () => {
        popupRef.current.setLngLat([36.817223, -1.2619547]).addTo(mapRef.current);
      });

      // Hide popup when mouse leaves
      marker.getElement().addEventListener("mouseleave", () => {
        popupRef.current.remove();
      });
    }
  }, []);

  return<div className="w-[40%] sm:w-[90%] sm:mx-auto sm:h[30vh] h-[100vh] rounded-xl overflow-hidden" ref={mapContainerRef}/>
}
