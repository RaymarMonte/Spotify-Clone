'use client'

import { useRef, useState } from "react";

export default function SplitPane({
    first, second
}: {
    first: React.ReactNode,
    second: React.ReactNode
}) {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [firstPaneBasis, setFirstPaneBasis] = useState('');

    function handleDividerMouseDown(event: React.MouseEvent) {
        setIsMouseDown(true);
    }
    
    function handleDividerMove(event: React.MouseEvent) {
        if (isMouseDown) {
            setFirstPaneBasis(`${event.clientX}px`);
        }
        else {
            handleEndMove(event);
        }
    }
    
    function handleEndMove(event: React.MouseEvent) {
        setIsMouseDown(false);
    }
    
    return (
        <div className="flex w-full h-full"
            {...(isMouseDown && { onMouseMove: handleDividerMove, onMouseUp: handleEndMove })}
        >
            <div className="grow shrink-0 basis-[300px] flex w-full bg-red-500"
                style={firstPaneBasis ? { flexBasis: firstPaneBasis } : {}}
            >
                {first}
            </div>
            <div onMouseDown={handleDividerMouseDown}
                className="grow-0 shrink-0 w-1 cursor-col-resize m-0">
                &nbsp;
            </div>
            <div className="grow-0 shrink overflow-x-auto flex w-full bg-violet-500">
                {second}
            </div>
        </div>
    )
}