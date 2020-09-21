const express = require('express');
const next = require('next');

const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require('fs');
const path = require('path');
const filePath = './data.json';
const moviesData = require(filePath);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData);
  });

  server.get('/api/v1/movie/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex(m => m.id === id);
    const movie = moviesData[movieIndex];
    return res.json(movie);
  });

  server.post('/api/v1/movies/', (req, res) => {
    const movie = req.body;
    moviesData.push(movie);
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) return res.status(404).json(err);
      return res.json('Movie has been succesfully added !!');
    });
  });

  server.delete('/api/v1/movie/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex(m => m.id === id);
    moviesData.splice(movieIndex, 1);
    const fileToPath = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    fs.writeFile(fileToPath, stringifiedData, err => {
      if (err) return res.status(404).json(err);
      return res.json('Successfully deleted');
    });
  });

  server.patch(`/api/v1/movies/:id`, (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    const movieIndex = moviesData.findIndex(m => m.id === id);
    moviesData[movieIndex] = movie;
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    const pathToFile = path.join(__dirname, filePath);
    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) return res.status(404).json(err);
      return res.json('Edit successfully !');
    });
  });

  // we are handling all the request comming to our server
  server.get('*', (req, res) => {
    // nextjs is handling requests and providing pages where are navigating
    return handle(req, res);
  });

  server.post('*', (req, res) => {
    // nextjs is handling requests and providing pages where are navigating
    return handle(req, res);
  });
  const PORT = process.env.PORT || 3001;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log('Ready on PORT ' + PORT);
  });
});
