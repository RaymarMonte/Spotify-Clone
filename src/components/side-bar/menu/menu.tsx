import { HomeSVGPath } from "../../icons/home-svg-path";
import { MenuItem } from "./menu-item";
import { SearchSVGPath } from "../../icons/search-svg-path";
import { useState } from "react";
import { ActivatedHomeSVGPath } from "@/components/icons/activated-home-svg-path";
import { ActivatedSearchSVGPath } from "@/components/icons/activated-search-svg-path";

export function Menu() {
    const [isHomeActivated, setIsHomeActivated] = useState(true);
    const [isSearchActivated, setIsSearchActivated] = useState(true);
    return (
        <div className="px-3 py-2 rounded-lg bg-[#121212]">
            <ul>
                <MenuItem icon={isHomeActivated ? <ActivatedHomeSVGPath /> : <HomeSVGPath />} label="Home" isLabelShown={true} />
                <MenuItem icon={isSearchActivated ? <ActivatedSearchSVGPath /> : <SearchSVGPath />} label="Search" isLabelShown={true} />
            </ul>
        </div>
    )
}