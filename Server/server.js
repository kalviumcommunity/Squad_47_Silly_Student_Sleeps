const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//This code is for PLU no work with app

const uri = 'mongodb+srv://janhavi:janhavi02@sleep.6wml463.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');

    app.get("/", (req, res) => {
      res.json({ connection: "Connected", message: "Welcome to the server!" });
    });

    app.listen(port, () => {
      console.log(`🚀 Server running on PORT: ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);

    app.get("/", (req, res) => {
      res.json({ connection: "Not Connected", message: "Failed to connect to the database.", error: error.message });
    });
  });
