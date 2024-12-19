import { useState } from "react";
import LocateMe from "./LocateMe";
import MapControls from "./MapControls";
import MapSearch from "./MapSearch";

function MapMenu({ setCenter, setStyle, style, setTheme, theme }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed top-0 right-0 m-4 md:m-8 flex flex-col-reverse flex-col md:flex-row gap-3">

      {/* Locate Me */}
      <LocateMe setCenter={setCenter} theme={theme} />

      {/* Map SSearch */}
      <MapSearch theme={theme} />

      {/* Map Controls */}
      <MapControls
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        style={style}
        setStyle={setStyle}
        setTheme={setTheme}
        theme={theme}
      />
    </div>
  );
}

export default MapMenu;
