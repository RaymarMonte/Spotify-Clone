import { Menu } from "./menu";

export function SideBar() {
    return (
        <div className="flex flex-col w-full bg-red-500">
            <div className="flex-none">
                <Menu />
            </div>
        </div>
    )
}