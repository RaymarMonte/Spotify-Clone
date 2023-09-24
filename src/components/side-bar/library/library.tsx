import { useState } from "react";
import { LibraryHeader } from "./library-header";
import { LibraryFilters } from "./library-filters";

export function Library() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isListView, setIsListView] = useState(false);

    return (
        <div className="flex flex-col w-full h-0 min-h-full rounded-lg bg-[#121213]">
            <div className="flex-none">
                <LibraryHeader isExpanded={isExpanded} isListView={isListView} />
                <LibraryFilters />
            </div>
            <div className="scrollable grow divide-y">
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
            </div>
        </div>
    )
}