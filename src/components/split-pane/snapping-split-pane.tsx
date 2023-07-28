import { useState } from "react";
import SplitPane from "./split-pane";

export function SnappingSplitPane({
    first, second
}: {
    first: React.ReactNode,
    second: React.ReactNode,
}) {

    const [dividerXPosInPX, setDividerXPosInPX] = useState(700);

    function moveDivider(clientX: number) {
        setDividerXPosInPX(clientX);
            // const firstPaneBasis = firstMinSizeInPX > clientX ? firstMinSizeInPX : clientX;
            // setFirstPaneBasis(`${firstPaneBasis}px`);
    }

    return (
        <SplitPane
            first={first}
            second={second}
            moveDivider={moveDivider}
            dividerXPosInPX={dividerXPosInPX}
        />
    )
}