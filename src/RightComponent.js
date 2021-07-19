import {useContext} from "react";
import {ShortCutsContext} from "./Keypress";

export default function RightComponent(props) {
    const {shortcutList} = useContext(ShortCutsContext);
    return (
        <>
            <div className="title">Shortcuts From providers</div>
            {shortcutList.map((e, index)=>(
                <div className="desc" key={index}>{index+1}. {JSON.stringify(e)}</div>
            ))}
        </>
    )
}
