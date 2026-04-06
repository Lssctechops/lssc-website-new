// components/GoogleMapProvider.tsx
"use client";

import { LoadScript } from "@react-google-maps/api";
import React from "react";

const libraries = ["places"];

export default function GoogleMapProvider({ children }) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA_EShs05GD76mc2Mjy1l2ByyO2FMHn3yA"
      // googleMapsApiKey="AIzaSyBrxm6LdCE3t5dE5dPbaXkcobgyvj9ZoBI"
      libraries={libraries}
      loadingElement={<div>Loading...</div>}
    >
      {children}
    </LoadScript>
  );
}
