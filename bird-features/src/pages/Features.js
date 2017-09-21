import React from 'react';

import Feature from '../components/features/Splash';
import Notebook from '../components/features/Notebook';

export default class Features extends React.Component {
  render() {
    return (
      <main id='feature-content'>
        <Feature/>
        <Notebook/>
      </main>
    );
  }
}
