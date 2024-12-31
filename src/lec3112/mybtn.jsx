import * as React from 'react';

class MyButton extends React.Component {
    render() {
        const {xyz,abc} = this.props;
        return <button disabled={xyz}>{abc}</button> 
        
    }
}

export default MyButton;

// properties and state diffrences
// properties are immutable
// state is mutable
// properties are passed from parent to child
// state is managed by the component itself
// properties are read only
// state can be changed
// properties are used to communicate between components
// state is used to manage the component itself
// properties are used to pass data to the component
// state is used to manage the data of the component