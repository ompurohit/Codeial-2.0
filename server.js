const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
const db = require('./config/mongoose');

app.use(expressLayouts);


// extract style and layouts from sub pages into layouts 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set view path
app.set('views', './views');
// set view engine 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());



// initialize routes 
app.use('/',require('./routes'));

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));