const express = require('express');
const app = express();

const path = require('path');

const puerto = process.env.PORT;

const homeRouter = require('./routes/homeRouter');
const usersRouter = require('./routes/usersRouter');
const productRouter = require('./routes/productRouter');


app.use(express.static(path.join(__dirname, '/public')))

app.set ('view engine', 'ejs');


app.use ('/', homeRouter);
//app.use ('/', usersRouter);
//app.use ('/', productRouter);


/*
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});
*/

app.listen (puerto || 3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});



