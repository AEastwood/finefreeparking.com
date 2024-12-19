'use client'

import Logo from "@/components/Logo";
import Map from "@/components/map/Map";
import Link from "next/link";
import { APIProvider } from '@vis.gl/react-google-maps';

export default function Home() {
  return (
    <>
      {/* Logo */}
      <Link className="fixed m-8 z-20" href="/">
        <Logo />
      </Link>

      {/* Map */}
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map />
      </APIProvider>
    </>
  );
}
