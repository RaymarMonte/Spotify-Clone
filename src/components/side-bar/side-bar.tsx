import { Library } from "./library";
import { Menu } from "./menu/menu";

export function SideBar() {
    return (
        <nav className="flex flex-col w-full h-full gap-2">
            <div className="flex-none">
                <Menu />
            </div>
            <div className="grow">
                <Library />
            </div>
        </nav>
    )
}