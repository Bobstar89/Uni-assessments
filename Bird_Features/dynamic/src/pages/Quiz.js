import React from 'react';

import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Quiz from '../components/quiz/Quiz';
import Footer from '../components/layout/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <Quiz />
        <Footer />
      </div>
    );
  }
}
