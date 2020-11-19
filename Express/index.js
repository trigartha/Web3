const express = require ('express');

const app = express()

const routes = require('./routing/routes');
const time = require('./middelware/time_ip');

app.use(time);
app.use('/', routes);

app.listen(5000);

