import * as React from "react";

class ClassTimeTable extends React.Component {
    render() {
        const tableStyle = {
            width: "100%",
            height: "150%",
            borderCollapse: "collapse",
            textAlign: "center",
            border: "1px solid black"
        };

        const cellStyle = {
            border: "1px solid black",
            padding: "8px"
        };

        return (
        <div>
            <h1 style={{ textAlign: "center" }}>Class Time Table</h1>
            <table style={tableStyle}>
                    <tr>
                        <td style={cellStyle} colSpan="6" align="center">
                            <strong>
                            RK University<br />School of Engineering<br />6CEA
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td style={cellStyle} colSpan="3">class counselor : <b>Prof. Anju kakkad</b></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}></td>
                        <td style={cellStyle}><strong>Monday</strong></td>
                        <td style={cellStyle}><strong>Tuesday</strong></td>
                        <td style={cellStyle}><strong>Wednesday</strong></td>
                        <td style={cellStyle}><strong>Thursday</strong></td>
                        <td style={cellStyle}><strong>Friday</strong></td>
                    </tr>
                <tbody>
                    <tr>
                        <td style={cellStyle}>8:00 to 8:55</td>
                        <td style={cellStyle}>React(nv)</td>
                        <td style={cellStyle} rowSpan="2">React(nv)</td>
                        <td style={cellStyle}>AI/ML(cp)</td>
                        <td style={cellStyle}>React(sms)</td>
                        <td style={cellStyle}>pd(ds)</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>8:55 to 9:45</td>
                        <td style={cellStyle}>React(nv)</td>
                        <td style={cellStyle}>AI/ML(cp)</td>
                        <td style={cellStyle}>React(sms)</td>
                        <td style={cellStyle}>pd(ds)</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>Class/Lab Location</td>
                        <td style={cellStyle}>LL1</td>
                        <td style={cellStyle}>LL5</td>
                        <td style={cellStyle}>LL1</td>
                        <td style={cellStyle}>LL1</td>
                        <td style={cellStyle}>118</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>9:45 to 10:00</td>
                        <td style={cellStyle} colSpan="5" align="center"><strong>TEA BREAK</strong></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>10:00 to 10:50</td>
                        <td style={cellStyle}>.net(pjt)</td>
                        <td style={cellStyle}>.net(BD)</td>
                        <td style={cellStyle}>TOC(AKK)</td>
                        <td style={cellStyle} rowSpan="2">AI/ML(cp)</td>
                        <td style={cellStyle}>AI/ML(cp)</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>10:50 to 11:40</td>
                        <td style={cellStyle}>.net(pjt)</td>
                        <td style={cellStyle}>.net(BD)</td>
                        <td style={cellStyle}>TOC(AKK)</td>
                        <td style={cellStyle}>TOC(AKK)</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>Class/Lab Location</td>
                        <td style={cellStyle}>LL1</td>
                        <td style={cellStyle}>LL1</td>
                        <td style={cellStyle}>201</td>
                        <td style={cellStyle}>LL6</td>
                        <td style={cellStyle}>118</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>11:45 to 12:30</td>
                        <td style={cellStyle} colSpan="5"><strong>LUNCH BREAK</strong></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>12:30 to 1:20</td>
                        <td style={cellStyle} rowSpan="2">Lib</td>
                        <td style={cellStyle} rowSpan="2">PD(ds)</td>
                        <td style={cellStyle} rowSpan="2">Lib</td>
                        <td style={cellStyle} rowSpan="2">.net(bd)</td>
                        <td style={cellStyle} rowSpan="2">Lib</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>1:20 to 2:10</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>Class/Lab Location</td>
                        <td style={cellStyle}></td>
                        <td style={cellStyle}>118</td>
                        <td style={cellStyle}></td>
                        <td style={cellStyle}>LL3</td>
                        <td style={cellStyle}></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default ClassTimeTable;
