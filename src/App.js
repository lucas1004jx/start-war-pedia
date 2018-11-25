import React, { Component } from 'react';
import './App.scss';
import LandingPage from './js_components/landingPage';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <LandingPage/>
      </div>
      </Provider>
    );
  }
}

export default App;
