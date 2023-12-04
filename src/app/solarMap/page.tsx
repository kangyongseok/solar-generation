/* eslint-disable no-new */
"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

function SolarMap() {
  const mapElement = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!mapElement.current) return;

    const location = new window.naver.maps.LatLng(37.5656, 126.9769);

    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map(mapElement.current, mapOptions);
    new window.naver.maps.Circle({
      map,
      center: location,
      radius: 200,
      fillColor: "crimson",
      fillOpacity: 0.2,
    });
    new window.naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <div ref={mapElement} className="h-screen w-screen"></div>
    </>
  );
}

export default SolarMap;
