'use client';

import themes from '@/data/maps/themes';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import MapMenu from './MapMenu';

export default function Page({ children }) {
    const [theme, setTheme] = useState('light');

    // Load the persisted theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('mapTheme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Update theme in localStorage when it changes
    const handleThemeChange = (t) => {
        setTheme(t);
        localStorage.setItem('mapTheme', t);
    };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
                key={theme} // Re-mount map when theme changes
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{
                    lat: 54.242118,
                    lng: -4.00000
                }}
                defaultZoom={6}
                gestureHandling="greedy"
                disableDefaultUI={false}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    styles: themes[theme],
                }}
            />
            <MapMenu setTheme={handleThemeChange} theme={theme} />
            {children}
        </APIProvider>
    );
}
