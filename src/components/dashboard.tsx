'use client'

import { MainView } from "./main-view/main-view";
import { SideBar } from "./side-bar/side-bar";
import { SnappingSplitPane } from "./utilities/split-pane/snapping-split-pane";

export function Dashboard() {

    return (
        <SnappingSplitPane
            first={<SideBar />}
            second={<MainView />}
        />
    )
}