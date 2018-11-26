import React, { Component } from 'react';
import './App.scss';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './store';
import Header from './js_components/header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <Header/>
        <Routes/>
      </div>
      </Provider>
    );
  }
}

export default App;
