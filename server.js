const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;


// set view engine 
app.set('view engine', 'ejs');

//set view path
app.set('views', path.join(__dirname, './resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));