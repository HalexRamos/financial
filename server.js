import express from 'express';

const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index', { text: 'Hello World' });
});

app.listen(3000, () => console.info('Listening on port 3000'));
