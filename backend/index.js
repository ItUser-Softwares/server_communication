const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const userModel = mongoose.model('User', userSchema);

// user = new userModel({ name: 'Abid', age: 21 });
// user.save();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  
app.get('/', async (req, res) => {
    //   res.send({ message: 'Hello World!' , name : 'Sahil' });
    res.send(await userModel.find());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});