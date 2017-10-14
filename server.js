// an express application

const express = require('express' );
const app = express();

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Arbeider hardt, via port 8080!')
})

