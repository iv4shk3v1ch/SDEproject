const express = require ('express');
const path = require ('path');
const morgan = require('morgan');
const ejs = require('ejs');
const nicknameController = require('./controllers/nicknameController');


const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', page + '.html');//вынести в файл

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended : true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log('listening port ' + PORT);
});

app.listen(PORT, () => {
    console.log('Сервер запущен на порту ' + PORT);
});

app.use(nicknameController)

app.get('/main', (req,res) => {
    res
        .status(200)
        .sendFile(createPath('main'));
});

app.use((req,res) => {
    res
        .status(404)
        .sendFile(createPath('error'));

})
