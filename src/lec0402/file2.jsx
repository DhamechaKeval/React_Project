import * as React from "react";
import { UserContext } from "./file1";

export function Page1() {
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
        </div>
    );
}

export function Page2() {
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
        </div>
    );
}

export function Page3() {
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
        </div>
    );
}

export function Page4() {
    const { principle, interest, duration } = React.useContext(UserContext);

    const totalAmount = (principle * (1 + (interest / 100) * duration)).toFixed(2);

    return (
        <div>
            <h2>Total Amount</h2>
            <p>Principal: {principle}</p>
            <p>Rate of Interest: {interest}%</p>
            <p>Time in Years: {duration}</p>
            <h3>Total Amount Including Interest: {totalAmount}</h3>
        </div>
    );
}