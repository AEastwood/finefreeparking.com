import { useState } from "react";
import LocateMe from "./LocateMe";
import MapStyleSelector from "./MapStyleSelector";
import MapThemeSelector from "./MapThemeSelector";
import MapSearch from "./MapSearch";

function MapMenu({ setStyle, style, setTheme, theme }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed top-0 right-0 m-8">
      {/* Black Square (Top Right Control) */}
      <div className="flex flex-col-reverse flex-col md:flex-row gap-3">
        <LocateMe theme={theme}/>
        <MapSearch theme={theme}/>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className={"w-12 h-12 cursor-pointer flex items-center justify-center rounded select-none shadow " + (theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-zinc-950 hover:bg-zinc-900 text-white')}
            title="Show Menu"
          >
            ☰
          </button>

          {/* Options (Right Side Controls) */}
          {showOptions && (
            <div className="flex flex-col gap-2">
              {/* Map Theme Selector */}
              <MapThemeSelector setTheme={setTheme} theme={theme} />

              {/* Map Style Selector */}
              <MapStyleSelector setStyle={setStyle} style={style} />
            </div>
          )}
        </div>
      </div>


    </div>
  );
}

export default MapMenu;
