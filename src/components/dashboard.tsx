'use client'

import { SideBar } from "./side-bar/side-bar"
import { MainView } from "./main-view/main-view"
import SplitPane from "./split-pane/split-pane"
import { useState } from "react";

export function Dashboard() {

    const [dividerXPosInPX, setDividerXPosInPX] = useState(700);

    function moveDivider(clientX: number) {
        setDividerXPosInPX(clientX);
    }

    return (
        <SplitPane
            first={<SideBar />}
            second={<MainView />}
            moveDivider={moveDivider}
            dividerXPosInPX={dividerXPosInPX}
        />
    )
}