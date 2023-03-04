import React from 'react';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Input';
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
      date: '',
      data: [],
      errorMsg: ''
    };

    // bind 'this' keyword to class methods
    this.getData = this.getData.bind(this);
  }


  // eventHandler for onClick event: pass to Child component
  getData() {

    // get date from inputBox
    const date = document.getElementById('date').value;

    // test code: log input to the console
    console.log(date);
    console.log(typeof date);

    // make a GET request to the API
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gUhCNHU8oJ1PnoQRuIl8ImQI5BlmrhN9XlYjrjE5&date=' + date)
    .then((response) => {

      // if we are successful and receive a response, upstate the state
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      
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
          <Input onClick={this.getData}/>
          <Frame id='picframe' data={data} />
          <Description info={data.explanation} />
        </div>
    );
    }
    // if an error occurred, notify the user
    return (
      <div className='App'>
        <div className='App'>
          <Header id='header' title="Let's Go To Space" />
          <Input onClick={this.getData}/>
          <Frame id='picframe' data={data} />
          <Description info={errorMsg} />
        </div>
      </div>
    );
  }
}

export default App;
