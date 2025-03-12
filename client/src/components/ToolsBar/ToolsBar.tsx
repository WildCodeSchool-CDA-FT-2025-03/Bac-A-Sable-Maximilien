
import { BiListUl, BiGridAlt } from "react-icons/bi";

type DisplayCallback = (display: DisplayType) => void;

type PropsToolsBar = {
    onDisplay: DisplayCallback;
};

export type DisplayType = "list" | "grid";

function displayCallback(display: DisplayType, cb: DisplayCallback) {
    cb(display);
}

export const ToolsBar = (props: PropsToolsBar) => {
    const callbackDisplay = props.onDisplay;

    return (
        <div>
            <BiListUl onClick={()=>displayCallback("list", callbackDisplay)}/>
            <BiGridAlt onClick={()=>displayCallback("grid", callbackDisplay)}/>
        </div>
    )
}