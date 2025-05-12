const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'index.html');
    const content = await fs.readFile(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server Error');
    console.error(err);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});
