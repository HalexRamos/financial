import app from './app';
import express from 'express';

app.use(express.json());
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, () => console.info('Listening on port 3000'));
