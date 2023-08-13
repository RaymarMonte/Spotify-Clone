export function MenuItem({
    icon, label
}: {
    icon: React.ReactNode,
    label: string
}) {
    return (
        <li className="px-3 py-1">
            <div className="flex items-center gap-5 h-10">
                <svg height="24" width="24" className="fill-white">
                    {icon}
                </svg>
                <span className="font-bold text-base">{label}</span>
            </div>
        </li>
    )
}