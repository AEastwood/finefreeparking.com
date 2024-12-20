import React from 'react'
import MapStyleSelector from "./MapStyleSelector";
import MapThemeSelector from "./MapThemeSelector";

function MapControls({ showOptions, setShowOptions, setStyle, style, setTheme, theme }) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className={"w-12 h-12 cursor-pointer flex items-center justify-center rounded select-none shadow " + (theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-zinc-950 hover:bg-zinc-900 text-white')}
        title="Show Menu"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
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
  )
}

export default MapControls