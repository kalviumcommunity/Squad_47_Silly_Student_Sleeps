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
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
  .then(user => {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  })
  .catch(err => {
    console.error(err);
    res.status(400).json({ error: err.message });
  });
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
