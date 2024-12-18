function MapMenu({ setTheme, theme }) {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-2 w-[250px]">
      <div className={"text-white text-sm rounded p-4 shadow transition " + (theme === 'light' ? "bg-zinc-800" : "bg-zinc-900")}>
        <div className="flex justify-between">
          <div className="select-none">
            theme
          </div>

          <select
            className={"w-auto form-control form-control-sm text-white pr-4 cursor-pointer " + (theme === 'light' ? "bg-zinc-800" : "bg-zinc-900")}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default MapMenu