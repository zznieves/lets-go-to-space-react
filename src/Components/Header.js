import React from 'react';

// functional component: arrow-function syntax
const Header = (props) => {

    // destructure props
    const { id, title } = props;

    // return HTML(JSX)
    return (
        <div id={id}>
            <h1>{title}</h1>
        </div>
    );
};


export default Header;