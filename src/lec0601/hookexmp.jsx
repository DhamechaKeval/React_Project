//useState  
//useEffect (runnung in background)
//useReducer
//useContext / Zustend / Redux
//useMemo
//useCallback

import { useState } from "react";

function StateExample(){
    const[name] = useState("First hook called");
    return <h1>{name}</h1>;
}
export default StateExample;