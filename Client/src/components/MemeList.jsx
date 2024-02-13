
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './All';

const names = ['Janhavi', 'Ishita', 'Manya', 'Suryapratap', 'Devraj', 'Anushka', 'Ansh', 'Bhumi', 'Saksham', 'Mayur', 'Aniket', 'Dhruv', 'Kritika', 'Rishabh', 'Nitin',
  'Nayan', 'Siddharth','Darshan','Gouransh','Somuya','Manvesh','Hanshul','Anuj','Akshit','Parth','Suhas'];
const sleepingTimes = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
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
  "My daily exercise routine consists of running late and jumping to conclusions."
];

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const App = () => {
  const [selectedName, setSelectedName] = useState('');
  const [selectedSleepingTime, setSelectedSleepingTime] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [selectedQuote, setSelectedQuote] = useState('');
  const [memes, setMemes] = useState([]);
  const [randomMeme, setRandomMeme] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(response => {
        setMemes(response.data);
        setSelectedName(getRandomElement(names));
        setSelectedSleepingTime(getRandomElement(sleepingTimes));
        setSelectedEmoji(getRandomElement(emojis));
        setSelectedQuote(getRandomElement(quotes));
        handleRandomMeme();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRandomMeme = () => {
    if (memes.length > 0) {
      const randomIndex = Math.floor(Math.random() * memes.length);
      setRandomMeme(memes[randomIndex]);
    }
  };

  const handleRandomize = () => {
    setSelectedName(getRandomElement(names));
    setSelectedSleepingTime(getRandomElement(sleepingTimes));
    setSelectedEmoji(getRandomElement(emojis));
    setSelectedQuote(getRandomElement(quotes));
    handleRandomMeme();
  };

  return (
    <div className="App">

      <div>
        {randomMeme && (
          <div>
            <img src={randomMeme.image} alt="Random Meme" />
          </div>
        )}
      </div>
      <Main
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

