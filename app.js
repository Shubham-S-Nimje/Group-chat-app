const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoutes = require('./login');
const chatsRoutes = require('./chats');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes)
app.use(chatsRoutes)

app.listen(4000);
