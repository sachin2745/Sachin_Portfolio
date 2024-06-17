const express = require('express');
const cors = require('cors');
const app = express();


const contactFormRouter = require('./routers/contactFormRouter');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use('/contactForm', contactFormRouter);


const port = 5000;

app.post('/add', (req, res) => {
    res.send(' response from express server ')
});

app.get('/add', (req, res) => {
    res.send(' add response from express server  ')
});

app.listen(port, () => { console.log('Express Server Started'); });