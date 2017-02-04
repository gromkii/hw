var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use('/lib', express.static(`${__dirname}/scripts`));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server is listening on %d 🐰', port);
});
