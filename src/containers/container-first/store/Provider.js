import React from "react";
import ContextFirst, {initValue} from "./context";
import reducerFirst from "./reducerFirst";

const ProviderFirst = ({children}) => {

    const [state, dispatch] = React.useReducer(reducerFirst, initValue)

    return (
        <ContextFirst.Provider value={{state, dispatch}}>
            {children}
        </ContextFirst.Provider>
    )
}
export default ProviderFirst;