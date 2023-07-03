import { SideBar } from "./side-bar/side-bar"
import { MainView } from "./main-view"
import SplitPane from "./split-pane"

export function Dashboard() {
    return (
        <SplitPane
            first={
                <SideBar />
            }
            second={
                <MainView />
            }
        />
    )
}