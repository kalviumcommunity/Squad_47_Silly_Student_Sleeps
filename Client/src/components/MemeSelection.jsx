import React from 'react';
import { Link } from 'react-router-dom';

const MemeSelection = ({ handleRandomize }) => {
  return (
    <div className="meme-selection">
      <button className='' onClick={handleRandomize}>Generate Random Meme</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MemeSelection;
