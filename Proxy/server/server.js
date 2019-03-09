const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3004;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(`/restaurants/:id`, express.static(path.join(__dirname, `../public/`)));

app.get(`/logo.png`, function (req, res) {  
  res.sendFile(path.join(__dirname, '..public/logo.png'));
});

// app.get(`/api/restaurants/:id/photos`, (req, res) => {
//   console.log('inside the get Proxy servre', req.params.id);
//   console.log('baseUrl', req.baseUrl);
//   console.log('hostname', req.hostname)
//   res.sendFile(path.join(__dirname, '../public/dist/index.html'))

//   // res.status(200).end();
// })

app.listen(PORT, () => {
  console.log(`Proxy server running at: http://localhost:${PORT}`);
});