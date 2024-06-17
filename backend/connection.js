const mongoose = require('mongoose');

const url = "mongodb+srv://sachin:pikachu@sachin.apdoy2g.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Sachin";

// asynchronous functions - return Promise
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;