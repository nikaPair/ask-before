"use client";

import React from "react";
import { MapImageWrapper, MapPicture } from "./ui/MapImage.styled";
import { MapButton } from "./ui/MapButton";

export default function MapImage() {
  return (
    <MapImageWrapper>
      <MapPicture src="/images/Locations/locations.png" alt="Map" />
      <MapButton />
    </MapImageWrapper>
  );
}
