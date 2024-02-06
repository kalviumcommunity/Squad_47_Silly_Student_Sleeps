import React from 'react';
import MemeContainer from './MemeContainer';
import MemeInfo from './MemeInfo';
import MemeSelection from './MemeSelection';

const Main = (props) => {
  return (
    <main>
      <MemeContainer {...props} />
      <MemeInfo {...props} />
      <MemeSelection {...props} />
    </main>
  );
};

export default Main;
