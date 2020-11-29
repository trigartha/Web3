require('./config/db');
const helmet = require('helmet');

const express = require("express");
const app = express();
const routes =require('./routes/users');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(3000);