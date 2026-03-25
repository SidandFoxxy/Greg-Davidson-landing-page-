const fs = require('fs');
module.exports = (req, res) => {
  try {
    const html = fs.readFileSync('./index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.end('Server error');
  }
};
