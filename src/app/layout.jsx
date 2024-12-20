import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'FineFreeParking - Free & Legal Parking Finder Near You',
  description: 'Find free, charge-free parking spots nearby with FineFreeParking. Avoid charges and fines effortlessly. Start parking smarter today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
