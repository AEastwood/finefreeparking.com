'use client'


export default function LocateMe({ setCenter, theme }) {

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (block) => {
                    console.log('failed');
                });
        } else {
            console.log("Geolocation not supported");
        }
    }

    return (
        <button
            onClick={getLocation}
            className={"w-12 h-12 cursor-pointer flex items-center justify-center rounded select-none shadow " + (theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-black' : 'bg-zinc-950 hover:bg-zinc-900 text-white')}
            title="Locate Me"
        >
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="none"
                stroke="currentColor"
            >
                <path
                    d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                    style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px", }}
                />
                <circle cx="256" cy="192" r="48" style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px", }} />
            </svg>
        </button>
    )
}
