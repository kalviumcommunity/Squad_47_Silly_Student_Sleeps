const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://janhavi:janhavi02@cluster0.anz3bbv.mongodb.net/?retryWrites=true&w=majority', {
  dbName: 'Express',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get("/users", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});