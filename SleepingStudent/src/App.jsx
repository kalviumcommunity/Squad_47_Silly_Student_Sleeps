
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/All';

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
import mem16 from './assets/meme16.jpeg';
import mem17 from './assets/meme17.jpeg';
import mem18 from './assets/meme18.jpeg';
import mem19 from './assets/meme19.jpeg';
import mem20 from './assets/meme20.jpeg';
import mem21 from './assets/meme21.jpeg';
import mem22 from './assets/meme22.jpeg';
import mem23 from './assets/meme23.jpeg';
import mem24 from './assets/meme24.jpeg';
import mem25 from './assets/meme25.jpeg';
import mem26 from './assets/meme26.jpeg';
import mem27 from './assets/meme27.jpeg';
import mem28 from './assets/meme28.jpeg';
import mem29 from './assets/meme29.jpeg';
import mem30 from './assets/meme30.jpeg';
import mem31 from './assets/meme31.jpeg';
import mem32 from './assets/meme32.jpeg';
import mem33 from './assets/meme33.jpeg';
import mem34 from './assets/meme34.jpeg';
import mem35 from './assets/meme35.jpeg';
import mem36 from './assets/meme36.jpeg';
import mem37 from './assets/meme37.jpeg';
import mem38 from './assets/meme38.jpeg';
import mem39 from './assets/meme39.jpeg';
import mem40 from './assets/meme40.jpeg';
import mem41 from './assets/meme41.jpeg';
import mem42 from './assets/meme42.jpeg';
import mem43 from './assets/meme43.jpeg';



const memeImages = [mem1, mem2, mem3, mem4, mem5, mem6, mem7 , mem8, mem9, mem10, mem11, mem12, mem13, mem14, mem15,
  mem16, mem17, mem18, mem19, mem20, mem21, mem22, mem23, mem24, mem25, mem26, mem27, mem28, mem29, mem30,
  mem31, mem32, mem33, mem34, mem35, mem36, mem37, mem38, mem39, mem40, mem41, mem42, mem43];
const names = ['Janhavi', 'Ishita', 'Manya', 'Suryapratap', 'Devraj', 'Anushka', 'Ansh', 'Bhumi', 'Saksham', 'Mayur', 'Aniket', 'Dhruv', 'Kritika', 'Rishabh', 'Nitin',
'Nayan', 'Siddharth','Darshan','Gouransh','Somuya','Manvesh','Hanshul','Anuj','Akshit','Parth','Suhas'];
const sleepingTimes = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 ] 
const emojis = [ '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
'🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋',
'😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏',
'😒', '😓', '😔', '😕', '🙁', '☹️', '😖', '😞', '😟', '😠',
'😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪',
'😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴',
'😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾',
'😿', '🙀', '🙈', '🙉', '🙊', '🐵', '🐒', '🦍', '🐶', '🐕',
'🐩', '🐺', '🦊', '🦝', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆',
'🐴', '🐎', '🦄', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗',
'🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🐘', '🦏', '🐭', '🐁',
'🐀', '🐹', '🐰', '🐇', '🐿️', '🦔', '🦇', '🐻'];
const quotes = ['Sleeping is key to success', "I'm not lazy; I'm just in energy-saving mode.",

"My bed is a magical place where I suddenly remember everything I was supposed to do.",

"Sleeping is my drug; my bed is my dealer, and my alarm clock is the police.",

"I thought about exercising, but it's just not my strong suit. Besides, my arms were getting tired just thinking about it.",

"I'm not a morning person or a night owl. I'm a permanently exhausted pigeon.",

"My bed and I have a special relationship. We're perfect for each other, but my alarm clock doesn't seem to understand.",

"My favorite childhood memory is not paying bills. Ah, those were the days!",

"I wish I could lose weight as easily as I lose interest in the things I study.",

"My favorite exercise is a mix between a lunge and a crunch. I call it lunch.",
"I finally figured out why I'm always tired. I'm a night owl in a world made for early birds.",
"I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room.",
"My bed is a magical place where Monday doesn't exist.",
"Sleeping is my superpower. What's yours?",
"I'm not napping; I'm just meditating on the horizontal.",
"My bed and I have a love-hate relationship. I love it; it hates to see me leave.",
"My dream job would be getting paid to sleep. Where do I sign up?",
"I'm not sleeping; I'm just checking my eyelids for holes.",
"I'm not lazy; I'm in energy-saving mode.",
"Sleeping is my favorite sport. I'm an Olympic-level participant.",
"My bed and I have a special relationship. We're perfect for each other; it lets me be lazy, and I let it be comfortable.",
"Sleep is like a time machine to breakfast.",
"I don't need an alarm clock; my ideas wake me.",
"My favorite part of the day is when I get to hit the snooze button.",
"I'm not sleeping; I'm just upgrading my software.",
"Sleeping is a time machine to breakfast.",
"My bed is my happy place, especially when it's Monday morning, and I don't have to leave it.",
"I'm not a morning person or a night owl. I'm a permanently exhausted pigeon.",
"Dreaming of a world where alarm clocks are outlawed.",
"My daily exercise routine consists of running late and jumping to conclusions."]


const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const App = () => {
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
      <Header />
      <Main
        text={text}
        selectedMeme={selectedMeme}
        selectedName={selectedName}
        selectedSleepingTime={selectedSleepingTime}
        selectedEmoji={selectedEmoji}
        selectedQuote={selectedQuote}
        handleRandomize={handleRandomize}
      />
    </div>
  );
};

export default App;

