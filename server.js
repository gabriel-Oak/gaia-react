const express = require('express');
const fs = require('fs');
const compression = require('compression');

const port = process.env.PORT || 3000;

function loadServer() {
  const app = express();
  let filesPath;

  filesPath = require('path').join(__dirname, '/build');
  app.use(compression());
  app.use(express.static(filesPath));

  app.set('views', filesPath);

  app.get('/**', (req, res) => {
    const text = fs.readFileSync(`${filesPath}/index.html`, 'utf8');
    res.send(text)
  });

  app.listen(port, () => {
    console.log(`[${new Date()}]: Web server listening on port ${port}`);
  });
}

loadServer();