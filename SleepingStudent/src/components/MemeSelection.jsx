import React from 'react';

const MemeSelection = ({ handleRandomize }) => {
  return (
    <div className="meme-selection">
      <button onClick={handleRandomize}>Generate Random Meme</button>
    </div>
  );
};

export default MemeSelection;
