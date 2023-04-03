const express = require('express');
const path = require('path');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended:false }));
app.set('views', 'views');

app.get('/', (req,res,next) => {
    // console.log("Cookies: ", req.cookies)
});

app.listen(3000);