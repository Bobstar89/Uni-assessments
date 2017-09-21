import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer'

import Features from './pages/Features';
import Sanctuary from './pages/Sanctuary';
import Quiz from './pages/Quiz';
import Content from './pages/Content';

import './App.css';
import './css/main.css'

class App extends Component {
  render() {
    return (
    <HashRouter>
      <div id='app'>
        <Header/>
        <Navigation/>
        <Route exact path='/' component={Features}/>
        <Route path='/quiz' component={Quiz}/>
        <Route path='/content' component={Content}/>
        <Route path='/content/:subject/:page' component={Content}/>
        <Route path='/sanctuary' component={Sanctuary}/>
        <Footer/>
      </div>
    </HashRouter>
    );
  }
}

export default App;
