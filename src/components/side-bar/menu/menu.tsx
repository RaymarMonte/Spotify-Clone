import { HomeSVGPath } from "./home-svg-path";

export function Menu() {
    return (
        <div className="w-full px-3 py-2 rounded-lg bg-[#121212]">
            <ul>
                <li className="px-3 py-1">
                    <div className="flex gap-5">
                        <svg height="24" width="24" className="fill-white">
                            <HomeSVGPath />
                        </svg>
                        <span>Home</span>
                    </div>
                </li>
                <li className="px-3 py-1">Search</li>
            </ul>
        </div>
    )
}