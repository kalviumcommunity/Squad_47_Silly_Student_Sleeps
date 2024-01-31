import React, { useState } from 'react';
import './App.css';
import mem1 from './assets/meme1.jpg';
import mem2 from './assets/meme2.jpg';
import mem3 from './assets/meme3.jpg';
import mem4 from './assets/meme4.jpg';
import mem5 from './assets/meme5.jpg';
import mem6 from './assets/meme6.jpg';
import mem7 from './assets/meme7.jpg';
import mem8 from './assets/meme8.jpg';
import mem9 from './assets/meme9.jpg';
import mem10 from './assets/meme10.jpg';
import mem11 from './assets/meme11.jpg';
import mem12 from './assets/meme12.jpg';
import mem13 from './assets/meme13.jpg';
import mem14 from './assets/meme14.jpg';
import mem15 from './assets/meme15.jpg';

const memeImages = [mem1, mem2, mem3, mem4, mem5, mem6, mem7 , mem8, mem9, mem10, mem11, mem12, mem13, mem14, mem15];
const names = ['Janhavi', 'Ishita', 'Manya', 'Suryapratap', 'Devraj', 'Anushka', 'Ansh', 'Bhumi', 'Saksham', 'Mayur', 'Aniket', 'Dhruv', 'Kritika', 'Rishabh', 'Nitin'];
const sleepingTimes = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 ] 
const emojis = ['😂', '😍', '😭', '😡', '😱', '😑', '😒', '😓', '😔', '😕', '😖', '😞', '😟', '😠', '😡'];
const quotes = ['Sleeping is key to success', "I'm not lazy; I'm just in energy-saving mode.",

"My bed is a magical place where I suddenly remember everything I was supposed to do.",

"Sleeping is my drug; my bed is my dealer, and my alarm clock is the police.",

"I thought about exercising, but it's just not my strong suit. Besides, my arms were getting tired just thinking about it.",

"I'm not a morning person or a night owl. I'm a permanently exhausted pigeon.",

"My bed and I have a special relationship. We're perfect for each other, but my alarm clock doesn't seem to understand.",

"My favorite childhood memory is not paying bills. Ah, those were the days!",

"I wish I could lose weight as easily as I lose interest in the things I study.",

"My favorite exercise is a mix between a lunge and a crunch. I call it lunch."]
const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const MemePage = () => {
  const [text, setText] = useState('');
  const [selectedMeme, setSelectedMeme] = useState(getRandomElement(memeImages));
  const [selectedName, setSelectedName] = useState(getRandomElement(names));
  const [selectedSleepingTime, setSelectedSleepingTime] = useState(getRandomElement(sleepingTimes));
  const [selectedEmoji, setSelectedEmoji] = useState(getRandomElement(emojis));
  const [selectedQuote, setSelectedQuote] = useState(getRandomElement(quotes));

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleRandomize = () => {
    setSelectedMeme(getRandomElement(memeImages));
    setSelectedName(getRandomElement(names));
    setSelectedSleepingTime(getRandomElement(sleepingTimes));
    setSelectedEmoji(getRandomElement(emojis));
    setSelectedQuote(getRandomElement(quotes));
  };

  return (
    <div className="App">
      <header>
        <h1>Silly Student Sleeps</h1>
      </header>
      <main>
        <div id="meme-container">
          <img src={selectedMeme} alt="Generated Meme" />
          <div className="text-overlay">{text}</div>
        </div>
        <div className="meme-info">
          <p className='name'>{selectedName} sleeps for {selectedSleepingTime} hours {selectedEmoji}</p>
          <p>{selectedQuote}</p>
        </div>
        <div className="meme-selection">
          <button onClick={handleRandomize}>Generate Random Meme</button>
        </div>
      </main>
    </div>
  );
};

export default MemePage;
