import { ActivatedLibraryIcon } from "../../svg-paths/activated-library-icon";
import { CreateIcon } from "../../svg-paths/create-icon";
import { GridViewIcon } from "../../svg-paths/grid-view-icon";
import { ReduceIcon } from "../../svg-paths/reduce-icon";
import { SmallIcon } from "../../utilities/small-icon";

export function Library() {
    return (
        <div className="flex flex-col w-full h-0 min-h-full rounded-lg bg-[#121213]">
            <div className="flex-none">
                <header className="py-2 px-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center grow shrink-0 py-1 px-2 gap-3 h-10">
                            <svg height="24" width="24" className="fill-white">
                                <ActivatedLibraryIcon />
                            </svg>
                            <span className="font-bold text-base">Your Library</span>
                        </div>
                        <SmallIcon icon={<CreateIcon />} />
                        <SmallIcon icon={<GridViewIcon />} />
                        <SmallIcon icon={<ReduceIcon />} />
                    </div>
                </header>
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