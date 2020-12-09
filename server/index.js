const app = require('./server.js');
const port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});