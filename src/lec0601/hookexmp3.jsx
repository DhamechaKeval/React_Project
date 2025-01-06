import { useState } from "react";

function StateExample3(){
    const[color,setColor] = useState("red");
    const[bld,setBld] = useState(100);
    const[itl,setItl] = useState("");
    const[decoration,setDecoration] = useState("");
    return(
        <div>
        <div>
            <h2><p style={{color:color,fontWeight:bld,fontStyle:itl,textDecoration:decoration}} > This is the text content for display</p></h2><br/>
            <input type="radio" name="color" onChange={()=>setColor("Orange")}/>{"Orange"}<br/>
            <input type="radio" name="color" onChange={()=>setColor("Green")}/>{"Green"}<br/>
            <input type="radio" name="color" onChange={()=>setColor("Blue")}/>{"Blue"}<br/><br/>
            <input type="checkbox" name="bld" onChange={(e)=>setBld(e.target.checked ? 900 : 100)}/>{"Bold"}
            <input type="checkbox" name="itl" onChange={(e)=>setItl(e.target.checked ? "italic":"italic")}/>{"Italic"}
            <input type="checkbox" name="decoration" onChange={(e)=>setDecoration(e.target.checked ? "underline" :"")}/>{"Underline"}<br/>
        </div>
        </div>
    );
}
export default StateExample3;