import { CreateIcon } from "../icons/create-icon";
import { GridViewIcon } from "../icons/grid-view-icon";
import { ReduceIcon } from "../icons/reduce-icon";

export function Library() {
    return (
        <div className="flex flex-col w-full h-0 min-h-full rounded-lg bg-[#121213]">
            <div className="flex-none">
                <header className="py-2 px-4">
                    <div className="flex gap-2">
                        <div></div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <CreateIcon />
                            </svg>
                        </div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <GridViewIcon />
                            </svg>
                        </div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <ReduceIcon />
                            </svg>
                        </div>
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