import * as React from 'react';

export default ({abc,xyz}) => 
    <button disabled={abc}>
        {xyz}
    </button>

// discription of pure function
// pure function is a function that returns the same result if given the same arguments
// a pure function is a function where the return value is determined by its input values without observable side effects
