import express from 'express';
import path from 'path';

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening to ${PORT}....`);
  // eslint-disable-next-line no-console
  console.log('Press Ctrl+C to quit.');
});
