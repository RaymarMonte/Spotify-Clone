import { TopBar } from "./top-bar";

export function MainView() {
    return (
        <div className="relative w-full h-0 min-h-full">
            <div className="w-full absolute top-0 left-0 right-0">
                <TopBar />
            </div>
            <div className="overflow-auto relative h-full divide-y">
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