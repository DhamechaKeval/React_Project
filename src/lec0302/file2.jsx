import * as React from "react";
import { UserContext } from "./file1";

export function ProvideUserDetails(){
    const user = React.useContext(UserContext);
    return(
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>ID: {user.id}</p>
        </div>
    );
}

export function Page1(){
    return(
        <div>
            <h1>Page 1</h1>
            <ProvideUserDetails/>
        </div>
    );
}

export function Page2(){
    return(
        <div>
            <h1>Page 2</h1>
            <ProvideUserDetails/>
        </div>
    );
}
export function Page3(){
    return(
        <div>
            <h1>Page 3</h1>
            <ProvideUserDetails/>
        </div>
    );
}