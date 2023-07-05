import { Content } from "./content/content";
import { TopBar } from "./top-bar";

export function MainView() {
    return (
        <div className="w-full relative bg-violet-500">
            <div className="w-full absolute top-0 left-0 right-0 ">
                <TopBar />
            </div>
            <div>
                <Content />
            </div>
        </div>
    )
}