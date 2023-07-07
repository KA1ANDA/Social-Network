const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: 'ka1anda.github.io'}));

app.get('/', (req, res) => {
  res.send('Hello from the proxy server!');
});

app.listen(3000);