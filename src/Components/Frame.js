import React from 'react';


// class component
class Frame extends React.Component {

    // constructor
    constructor(props) {
        super(props);

        // initialize state
        this.state = {
            data: [],
            errorMsg: ''
        }

    }

    // render method: only required method in a class component
    render() {

        // destructure the state
        const { id, data} = this.props;

        // return HTML(JSX)
        return (
            <div id={id}>
                <h3>{data.title}</h3>
                <h4>{data.date}</h4>
                <img src={data.hdurl} alt='' />
            </div>
        );
    }
}

export default Frame;