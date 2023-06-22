export default function SplitPane({
    first, second
}: {
    first: React.ReactNode,
    second: React.ReactNode
}) {
    return (
        <div className="splitpane">
            <div className="splitpane-first">
                {first}
            </div>
            <div className="splitpane-second">
                {second}
            </div>
        </div>
    )
}