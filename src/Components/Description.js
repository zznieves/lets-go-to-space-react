import React from 'react';

// functional component
const Description = (props) => {

    // destructure props
    const { info } = props;

    //return HTML(JSX)
    return (
        <div>
            <p>{info}</p>
        </div>
    );
};


export default Description;