import { NavItem } from "@/components/side-bar/nav-item"

export const MenuItem = ({
    icon, label, isLabelShown
}: {
    icon: React.ReactNode,
    label: string
    isLabelShown: boolean
}) => {
    return (
        <li className="px-3 py-1">
            <NavItem icon={icon} label={label} isLabelShown={isLabelShown} />
        </li>
    )
}