var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send('Hello world');
});


// 1° creare get su /api/chat e rispondere contenut messages
const messages = ['Ciao', 'Come va?', 'Tutto bene grazie!'];
// Usare res.json(messages);


// 2° create post su /api/chat e aggiungere il messaggio a messages array

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});