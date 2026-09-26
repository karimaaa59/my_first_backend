const express = require('express');
const app = express();



app.get('/', (req, res) => {
    const songs = [
        "My Way", "New York, New York", "Fly Me to the Moon","Strangers in the Night", "That's Life", "The Way You Look Tonight",
        "I've Got You Under My Skin","Come Fly with Me", "You Make Me Feel So Young", "Somethin' Stupid", "The Best Is Yet to Come",
        "Luck Be a Lady","Love and Marriage","Summer Wind","It Was a Very Good Year", "The Lady Is a Tramp", "I Get a Kick Out of You",
        "One for My Baby","All or Nothing at All", "My Kind of Town","Night and Day", "Witchcraft", "Chicago", "Theme from New York, New York"
      ];
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  res.send(randomSong);
});

app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915');
});

app.get('/birth_city', (req, res) => {
  res.send('Hoboken, New Jersey');
});

app.get('/wives', (req, res) => {
  res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx');
});

app.get('/picture', (req, res) => {
  res.redirect(
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg'
  );
});

app.get('/public', (req, res) => {
  res.send('Everybody can see this page');
});

app.get('/protected', (req, res) => {
  const auth = req.headers.authorization;
  const expected =
    'Basic ' + Buffer.from('admin:admin').toString('base64');

  if (auth === expected) {
    res.send('Welcome, authenticated client');
  } else {
    res.set('WWW-Authenticate', 'Basic realm="Restricted"');
    res.status(401).send('Not authorized');
  }
});

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
