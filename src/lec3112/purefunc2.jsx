// eslint-disable-next-line no-unused-vars
import * as React from 'react';
// eslint-disable-next-line react/prop-types
const MyButton2 = ({abc,def})=>(
    <button disabled={abc}>
        {def}
    </button>
);

MyButton2.defaultProps = {
    abc: false,
    def: "Click Me",
};
export default MyButton2;