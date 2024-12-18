import Logo from "@/components/Logo";
import Map from "@/components/map/Map";
import Link from "next/link";

export const metadata = {
  title: 'FineFreeParking - Free & Legal Parking Finder Near You',
  description: 'Find free, charge-free parking spots nearby with FineFreeParking. Avoid charges, fines, and parking tickets effortlessly. Start parking smarter today!',
};

export default function Home() {
  return (
    <>
      {/* Logo */}
      <Link className="fixed p-8 z-20" href="/">
        <Logo />
      </Link>

      {/* Map */}
      <Map />
    </>
  );
}
