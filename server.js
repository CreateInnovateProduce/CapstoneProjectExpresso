const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const apiRouter = require('./api/api');
const PORT = process.env.PORT || 4000;
//const cors = require('cors');
//const errorhandler = require('errorhandler');


//app.use(bodyParser.json());
//app.use(cors());
app.use('/api', apiRouter);
//app.use(errorhandler());

app.listen(PORT, () => {
  console.log('Server is listening on port:' + PORT);
});

module.exports = app;
