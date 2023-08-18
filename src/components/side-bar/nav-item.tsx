export const NavItem = ({
    icon, label, isLabelShown
}: {
    icon: React.ReactNode,
    label: string
    isLabelShown: boolean
}) => {
    return (
        <div className="flex items-center gap-5 h-10">
            <svg height="24" width="24" className="fill-white">
                {icon}
            </svg>
            {isLabelShown && (<span className="font-bold text-base">{label}</span>)}
        </div>
    )
}