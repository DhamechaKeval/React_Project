//create 3 stage form with following elements
//page 1 Ask user to enter principle (10000)
//page 2 ask user to enter rate of interest 
//page 3 ask user to enter time in years
//page 4 show total amout including interest.
//use context api to pass data between pages.

import * as React from 'react';
export const UserContext = React.createContext();
function FetchPrinciple(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("10000");
        },3000);
    });
}

function FetchInterest(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("7");
        },3000);
    });
}

function FetchDuration(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2");
        },3000);
    });
}

export function CalculateInterest({children}){
    const [principle, setPrinciple] = React.useState("");
    const [interest, setInterest] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [page, setPage] = React.useState();
    React.useEffect(() => {
        FetchPrinciple().then((data) => setPrinciple(data));
        FetchInterest().then((data) => setInterest(data));
        FetchDuration().then((data) => setDuration(data));
        },[]);
        return<UserContext.Provider value={{principle,setPrinciple,interest,setInterest,duration,setDuration,page,setPage}}>{children}</UserContext.Provider>;

}