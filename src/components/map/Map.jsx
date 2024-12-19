'use client';

import themes from '@/data/maps/themes';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useState, useEffect, useRef } from 'react';
import MapMenu from './MapMenu';

export default function Page({ children }) {
    const [mapState, setMapState] = useState({
        center: {
            lat: 54.242118,
            lng: -4.00000
        },
        zoom: 6,
    });

    const [theme, setTheme] = useState('light');
    const mapRef = useRef(null);

    // Load persisted theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('mapTheme') || 'light';
        setTheme(savedTheme);
    }, []);

    // Update theme in localStorage
    const handleThemeChange = (t) => {
        
        setTheme(t);
        localStorage.setItem('mapTheme', t);
    };

    // Update mapState when the center changes
    const handleCenterChange = () => {
        if (mapRef.current) {
            const map = mapRef.current.getMap();
            const center = map.getCenter();
            setMapState((prevState) => ({
                ...prevState,
                center: { lat: center.lat(), lng: center.lng() },
            }));
        }
    };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
                ref={mapRef} // Attach the ref to the Map
                defaultCenter={mapState.center}
                defaultZoom={mapState.zoom}
                gestureHandling="greedy"
                key={theme}
                reuseMaps={true}
                style={{ width: '100vw', height: '100vh' }}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    styles: themes[theme],
                }}
                onIdle={handleCenterChange} // Update center when map becomes idle
            >
                <MapMenu setTheme={handleThemeChange} theme={theme} />
                {children}
            </Map>
        </APIProvider>
    );
}
