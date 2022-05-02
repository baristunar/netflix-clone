const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log('listening on port ', server.address().port);
});
