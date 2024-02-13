import React from 'react';

const MemeInfo = ({ selectedName, selectedSleepingTime, selectedEmoji, selectedQuote }) => {
  return (
    <div className="meme-info">
      <p className='name'>{selectedName} sleeps for {selectedSleepingTime} hours {selectedEmoji}</p>
      <p>{selectedQuote}</p>
    </div>
  );
};

export default MemeInfo;
