
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');
const Joi = require('joi');

const app = express();
app.use(cors());
app.use(express.json());


const UserSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
  age: Joi.number().integer().min(1).required().messages({
    'number.base': 'Age must be a number',
    'number.integer': 'Time must be an integer',
    'number.min': 'Time must be at least 1',
    'any.required': 'Time is required',
  }),
});

// Middleware for Joi validation
const validateUser = (req, res, next) => {
  const { error } = UserSchema.validate(req.body);
  if (error) {
    console.log("Joi validation error:", error.message); 
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// MongoDB connection
mongoose.connect('mongodb+srv://janhavi:janhavi02@cluster0.anz3bbv.mongodb.net/?retryWrites=true&w=majority',{
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

// CRUD endpoints
app.get("/users", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post("/createUser", validateUser, (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

app.put("/updateUser/:id", validateUser, (req, res) => {
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
