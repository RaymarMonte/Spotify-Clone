import { HomeIcon } from "../../icons/home-icon";
import { SearchIcon } from "../../icons/search-icon";
import { ActivatedHomeIcon } from "@/components/icons/activated-home-icon";
import { ActivatedSearchIcon } from "@/components/icons/activated-search-icon";
import { MenuItem } from "./menu-item";
import { useState } from "react";

export function Menu() {
    const [isHomeActivated, setIsHomeActivated] = useState(true);
    const [isSearchActivated, setIsSearchActivated] = useState(true);
    return (
        <div className="px-3 py-2 rounded-lg bg-[#121212]">
            <ul>
                <MenuItem icon={isHomeActivated ? <ActivatedHomeIcon /> : <HomeIcon />} label="Home" isLabelShown={true} />
                <MenuItem icon={isSearchActivated ? <ActivatedSearchIcon /> : <SearchIcon />} label="Search" isLabelShown={true} />
            </ul>
        </div>
    )
}