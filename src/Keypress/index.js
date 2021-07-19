import React, {useContext, useEffect, useState} from "react";
import keypress from 'keypress.js'
const keyPressListener = new keypress.Listener();

// create provider
export const ShortCutsContext = React.createContext({
    shortcutList: [],
    setShortcutList: () => {}
});


export const KeyboardShortcutsProvider = (props) => {
    const [shortcutList, setShortcutList] = useState([]);
    return (
        <ShortCutsContext.Provider value={{shortcutList, setShortcutList}}>
            {props.children}
        </ShortCutsContext.Provider>
    )
};

//create withRouter like HOC function
export function KeyboardConnect(InputComponent) {
    const CallbackComponent = function (props) {
        const {shortcutList} = useContext(ShortCutsContext);
        return (
            <InputComponent activeShortCuts={shortcutList} {...props} />
        )
    }
    return CallbackComponent
}

export function KeyboardShortcut (props) {
    const {
        setShortcutList
    } = useContext(ShortCutsContext);
    useEffect(() => {
        const shortCut = keyPressListener.simple_combo(props.combo, props.callback);
        setShortcutList(shortcutList => [...shortcutList, {
            value: props.combo,
            description: props.description,
            shortCut: shortCut
        }]);

        return () => {
            keyPressListener.unregister_combo(shortCut);
            setShortcutList(shortcutList => shortcutList.filter(shortCutItem => shortCutItem.shortCut !== shortCut));
        };
    }, []);
    return <React.Fragment />;
}
