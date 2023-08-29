import { useState } from "react";
import SplitPane from "./split-pane";

export function SnappingSplitPane({
    first, second
}: {
    first: React.ReactNode,
    second: React.ReactNode,
}) {

    const [dividerXPosInPX, setDividerXPosInPX] = useState(0);

    function moveDivider(clientX: number) {
        setDividerXPosInPX(clientX);
            // const firstPaneBasis = firstMinSizeInPX > clientX ? firstMinSizeInPX : clientX;
            // setFirstPaneBasis(`${firstPaneBasis}px`);
        // TODO: The components themselves must be responsive, but the stopping and snapping
        // logic must be handled by this component. Implement stoppingPoint snappingPoint
        // But before this: Implement responsiveness on the components
        // But before this: Implement fonts
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