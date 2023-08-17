import { HomeSVGPath } from "./home-svg-path";
import { MenuItem } from "./menu-item";
import { SearchSVGPath } from "./search-svg-path";

export function Menu() {
    return (
        <div className="px-3 py-2 rounded-lg bg-[#121212]">
            <ul>
                <MenuItem icon={<HomeSVGPath />} label="Home" />
                <MenuItem icon={<SearchSVGPath />} label="Search" />
            </ul>
        </div>
    )
}