import { ActivatedLibraryIcon } from "@/components/svg-paths/activated-library-icon"
import { CreateIcon } from "@/components/svg-paths/create-icon"
import { EnlargeIcon } from "@/components/svg-paths/enlarge-icon"
import { GridViewIcon } from "@/components/svg-paths/grid-view-icon"
import { ListViewIcon } from "@/components/svg-paths/list-view-icon"
import { ReduceIcon } from "@/components/svg-paths/reduce-icon"
import { SmallIcon } from "@/components/utilities/small-icon"

export const LibraryHeader = ({
    isExpanded, isListView
}: {
    isExpanded: boolean,
    isListView: boolean
}) => {
    return (
        <header className="py-2 px-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center grow shrink-0 py-1 px-2 gap-3 h-10">
                    <svg height="24" width="24" className="fill-white">
                        <ActivatedLibraryIcon />
                    </svg>
                    <span className="font-bold text-base">Your Library</span>
                </div>
                <SmallIcon icon={<CreateIcon />} />
                {
                    isExpanded && (
                        isListView ? (
                            <SmallIcon icon={<ListViewIcon />} />
                        ) : (
                            <SmallIcon icon={<GridViewIcon />} />
                        )
                    )
                }
                {
                    isExpanded ? (
                        <SmallIcon icon={<ReduceIcon />} />
                    ) : (
                        <SmallIcon icon={<EnlargeIcon />} />
                    )
                }
            </div>
        </header>
    )
}