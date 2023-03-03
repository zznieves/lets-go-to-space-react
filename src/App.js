import React from 'react';
import './App.css';
import Header from './Components/Header';
import Frame from './Components/Frame';
import Description from './Components/Description';

// import axios HTTP Library
import axios from 'axios';

class App extends React.Component {


  // constructor
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      data: [],
      errorMsg: ''
    };
  }

  // make a GET request to the API
  componentDidMount() {

    axios.get('')
    .then((response) => {

      // if we are successful and receive a response, upstate the state
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      
      console.log(error);
      // if an error occurred, place it in the state
      this.setState({
        errorMsg: 'Error retrieving data'
      });
    });
  }

  // render method: only required method in a class component
  render() {

    // destructure state
    const { data, errorMsg } = this.state;


    // if there is no error message, render.
    if(!errorMsg) {
    // return HTML(JSX)
    return (
        <div className='App'>
          <Header id='header' title="Let's Go To Space" />
          <Frame id='picframe' data={data} />
          <Description info={data.explanation} />
        </div>
    );
    }
    // if an error occurred, notify the user
    return (
      <div className='App'>
        <Description info={errorMsg} />
      </div>
    );
  }
}

export default App;
