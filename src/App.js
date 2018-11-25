import React, { Component } from 'react';
import Header from './js_components/header';
import './App.scss';

class App extends Component {
  componentDidMount(){
    console.log('fetch');
    
     fetch('https://swapi.co/api/people').then((data)=>data.json()).then((data)=>console.log(data)
     );
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
