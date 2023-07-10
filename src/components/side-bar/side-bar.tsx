import { Library } from "./library";
import { Menu } from "./menu";

export function SideBar() {
    return (
        <div className="flex flex-col w-full h-full gap-2">
            <div className="flex-none">
                <Menu />
            </div>
            <div className="grow">
                <Library />
            </div>
        </div>
    )
}