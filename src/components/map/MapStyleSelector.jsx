import React from 'react'

export default function MapStyleSelector({ setTheme, theme }) {
    return (
        <div className="flex justify-between">
            <div className="select-none">
                Style
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
    )
}
