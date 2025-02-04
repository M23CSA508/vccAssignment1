const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello from VM1!');
});

app.listen(port, () => {
  console.log(`Node A service listening on port ${port}`);
});
