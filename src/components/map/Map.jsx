'use client';

import defaults from '@/data/maps/defaults';
import themes from '@/data/maps/themes';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import MapMenu from './MapMenu';

export default function Page({ children }) {
    const [center, setCenter] = useState(defaults.center);
    const [style, setStyle] = useState(defaults.style);
    const [theme, setTheme] = useState(defaults.theme);
    const [zoom, setZoom] = useState(defaults.zoom);

    {/* On load */ }
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || defaults.theme;
        setTheme(savedTheme);
    }, []);

    {/* Handle theme change */ }
    const handleStyleChange = (s) => {
        setStyle(s);
        localStorage.setItem('style', s);
    };

    {/* Handle theme change */ }
    const handleThemeChange = (t) => {
        setTheme(t);
        localStorage.setItem('theme', t);
    };

    {/* Handle zoom change */ }
    const handleZoomChange = (zoom) => {
        setZoom(zoom)

        if (zoom < 12) return;
    };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
                defaultCenter={center}
                defaultZoom={zoom}
                gestureHandling="greedy"
                key={theme + style}
                reuseMaps={true}
                style={{ width: '100vw', height: '100vh' }}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    // mapTypeId: { style },
                    streetViewControl: false,
                    styles: themes[theme],
                    zoomControl: false,
                }}
                onCenterChanged={(map) => setCenter({
                    lat: map.map.getCenter().lat(),
                    lng: map.map.getCenter().lng(),
                })}
                onZoomChanged={(map) => handleZoomChange(map.map.zoom)}
            >
                <MapMenu
                    setCenter={setCenter}
                    setStyle={handleThemeChange}
                    style={theme}
                    setTheme={handleThemeChange}
                    theme={theme}
                />
                {children}
            </Map>
        </APIProvider>
    );
}
