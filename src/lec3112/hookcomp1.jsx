import * as React from "react";

function FuncComp1() {
    const [name]= React.useState("Functional Component 1");
  return <h1>{name}</h1>;
}
export default FuncComp1;

//main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import FuncComp1 from './lec3112/hookcomp1'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <FuncComp1 />
//   </StrictMode>,
// )

//useState
//useEffect
//useReducer
//useContext
