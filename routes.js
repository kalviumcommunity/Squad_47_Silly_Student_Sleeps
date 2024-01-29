const express = require('express');
const app = express();
const port = 5000;

const data = [
  {
    "NAME": "Janhavi",
    "ROLL NO.": 11111,
    "PHONE NO.": "911122334",
    "MEME": "Meme",
    "PHOTOGRAPH": "Photo",
    "REASON": "Reason",
    "HOUR SLEPT": 22
  },
  
];

app.use(express.json());

app.get('/', (req, res) => {
    res.json(data)
});

app.post('/', (req, res) => {
    const updated = req.body;
    data.push(updated);
    res.json(data)
})

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const update = req.body;
    data[index] = update;
    res.json(data);
});

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    data.splice(index, 1);
    res.json(data);
});


app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);
});

module.exports = app;