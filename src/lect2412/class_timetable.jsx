import * as React from "react";

class ClassTimeTable extends React.Component {
    render() {
        return (
        <div>
            <h1>Class Time Table</h1>
            <table style={{width: "100%" ,height:"150%", border: "1px solid black"}}>
                <th>
                    <label>Rk Univercity</label><br/>
                    <label>School of Engineering</label><br/>
                    <label>6CEA</label><br/>
                </th>
            </table>
        </div>
        );
    }
}

export default ClassTimeTable;