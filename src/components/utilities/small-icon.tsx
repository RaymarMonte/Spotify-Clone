export const SmallIcon = ({
    icon
}: {
    icon: React.ReactNode
}) => {
    return (
        <div className="p-2">
            <svg height="16" width="16" className="fill-white">
                {icon}
            </svg>
        </div>
    )
}