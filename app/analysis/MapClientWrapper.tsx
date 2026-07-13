"use client";

import dynamic from "next/dynamic";

// Dynamically import the real map component only on the client side
const PropertyMap = dynamic(
  () => import("@/components/analysis/PropertyMap"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-zinc-500 bg-zinc-950">
        Initializing Spatial Matrix...
      </div>
    ),
  }
);

interface MapClientWrapperProps {
  latitude: number;
  longitude: number;
  address: string;
}

export default function MapClientWrapper(props: MapClientWrapperProps) {
  return <PropertyMap {...props} />;
}