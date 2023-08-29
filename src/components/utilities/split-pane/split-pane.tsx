import { useState } from "react";

export default function SplitPane({
    first, second, moveDivider, dividerXPosInPX
}: {
    first: React.ReactNode,
    second: React.ReactNode,
    moveDivider: (clientX: number) => void;
    dividerXPosInPX: number;
}) {
    const [isMouseDown, setIsMouseDown] = useState(false);

    function isPrimaryMouseButtonClicked(event: React.MouseEvent) {
        return event.buttons === 1;
    }

    function handleDividerMouseDown(event: React.MouseEvent) {
        if (isPrimaryMouseButtonClicked(event)) {
            setIsMouseDown(true);
        }
    }

    function handleDividerMouseUp(event: React.MouseEvent) {
        setIsMouseDown(false);
    }

    function handleDividerMove(event: React.MouseEvent) {
        if (isPrimaryMouseButtonClicked(event)) {
            moveDivider(event.clientX);
        }
        else {
            handleDividerMouseUp(event);
        }
    }

    return (
        <div className="flex w-full h-full"
            {...(isMouseDown && { onMouseMove: handleDividerMove, onMouseUp: handleDividerMouseUp })}
        >
            <div className="grow shrink-0 w-full"
                style={{flexBasis: `${dividerXPosInPX}px`}}
            >
                {first}
            </div>
            <div onMouseDown={handleDividerMouseDown}
                className="grow-0 shrink-0 w-2 cursor-col-resize m-0">
                &nbsp;
            </div>
            <div className="grow-0 shrink overflow-x-auto w-full">
                {second}
            </div>
        </div>
    )
}