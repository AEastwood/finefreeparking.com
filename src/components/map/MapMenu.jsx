import MapStyleSelector from "./MapStyleSelector"

function MapMenu({ setTheme, theme }) {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-2 w-[250px]">
       <div
        className={"flex flex-col gap-3 text-white text-sm rounded p-4 shadow transition " + (theme === 'light' ? "bg-zinc-800" : "bg-zinc-950")}
      >
        <MapStyleSelector setTheme={setTheme} theme={theme} />
      </div>
    </div>
  )
}

export default MapMenu