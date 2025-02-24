import { useReducer } from 'react';

function Fun1 (state, action) {
    switch (action.type) {
        case "changeName":
            return { ...state, name: action.value };
        case "changeAge":
            return { ...state, age: action.value };
        default:
            return state;
    }
}

function ReducerExmp(){
    const [{name , age},dispatch] = useReducer(Fun1, {name: "John", age: 25});
    return (
        <div>
            <h1>Reducer Example</h1>
            <input type="text" value={name} onChange={(e) => dispatch({type:"changeName", value: e.target.value })}/>
            <br/>
            Name: {name}
            <br/>
            <br/>
            <input type="text" value={age} onChange={(e) => dispatch({type:"changeAge", value: e.target.value })}/>
            <br/>
            Age: {age}
            <br/>
        </div>
    );
}

export default ReducerExmp;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import ReducerExmp from './lec2402/reducerexample'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ReducerExmp />
//   </StrictMode>,
// )

