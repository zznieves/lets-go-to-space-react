import React from 'react';

// class component
class Input extends React.Component {

    // render method: only method required in a class component
    render(props) {

        // destructure props
        const { onClick } = this.props;

        // get the current date
        let today = new Date().toISOString().split('T')[0];

        // return HTML(JSX)
        return (
            <div>
                <input id='date' type='date' min='1995-06-16' max={today}/><br />
                <button type='submit' onClick={onClick}>Submit</button>
            </div>
        );
    }
}

export default Input;