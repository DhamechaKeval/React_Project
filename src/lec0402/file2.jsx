import * as React from "react";
import { UserContext } from "./file1";

export function Principle() {
    const { principle, setPrinciple, setPage } = React.useContext(UserContext);

    return (
        <div>
            <h2>Enter Principal</h2>
            <input
                type="number"
                value={principle}
                onChange={(e) => setPrinciple(e.target.value)}
            />
            <button onClick={() => setPage(1)}>Next</button>
            <br />
            <p>Current Value: {principle}</p>
        </div>
    );
}

export function Interest() {
    const { interest, setInterest, setPage } = React.useContext(UserContext);

    return (
        <div>
            <h2>Enter Rate of Interest</h2>
            <input
                type="number"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
            />
            <button onClick={() => setPage(2)}>Next</button>
            <br />
            <p>Current Value: {interest}</p>
        </div>
    );
}

export function Duration() {
    const { duration, setDuration, setPage } = React.useContext(UserContext);

    return (
        <div>
            <h2>Enter Time in Years</h2>
            <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <button onClick={() => setPage(3)}>Next</button>
            <br />
            <p>Current Value: {duration}</p>
        </div>
    );
}

export function Result() {
    const { principle, interest, duration } = React.useContext(UserContext);

    const totalAmount = (principle * (1 + (interest / 100) * duration)).toFixed(2);

    return (
        <div>
            <h1>Total Amount</h1>
            <p>Principal: {principle}</p>
            <p>Rate of Interest: {interest}%</p>
            <p>Time in Years: {duration} Year</p>
            <h2>Total Amount Including Interest: {totalAmount}</h2>
        </div>
    );
}