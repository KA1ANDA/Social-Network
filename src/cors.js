const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://ka1anda.github.io'
}));

// Add your routes and other middleware here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});