export function MenuItem({
    icon, label
}: {
    icon: React.ReactNode,
    label: string
}) {
    return (
        <li className="px-3 py-1">
            <div className="flex gap-5">
                <svg height="24" width="24" className="fill-white">
                    {icon}
                </svg>
                <span>{label}</span>
            </div>
        </li>
    )
}