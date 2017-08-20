import React from 'react';

import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Feature from '../components/Feature';
import Footer from '../components/layout/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Feature />
        <Footer />
      </div>
    );
  }
}
