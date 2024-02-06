import React from 'react';

const MemeContainer = ({ selectedMeme, text }) => {
  return (
    <div id="meme-container">
      <img src={selectedMeme} alt="Generated Meme" />
      <div className="text-overlay">{text}</div>
    </div>
  );
};

export default MemeContainer;
