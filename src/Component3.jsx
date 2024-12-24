import * as React from 'react';
class InpuutTest extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your name" />
                <button>Submit</button><br />
                <input type="checkbox" />
                <label>Remember Me</label><br />
                <input type="radio"/>
                <label>Male</label><br/>
                <input type="color" />
                <label>pic color</label><br />
                <input type="file" />
                <label>File</label><br />
                
            </div>
        );
    }
}
export default InpuutTest;