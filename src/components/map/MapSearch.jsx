import React from 'react'

export default function MapSearch({ theme }) {
    const disabled = true;

    if (disabled) {
        return <></>;
    }

    return (
        <button
            onClick={() => alert('Not Implemented')}
            className={"w-12 h-12 cursor-pointer flex items-center justify-center rounded select-none shadow " + (theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-zinc-950 hover:bg-zinc-900 text-white')}
            title="Search Location"
        >
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
            </svg>
        </button>
    )
}
