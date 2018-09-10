const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static('client'));
app.use(express.json());
app.use(bodyParser.json());


app.get('/chat', (req, res)=>{
    fs.readFile('client/chat.html', 'utf8', (err, data) => {
        if (err) throw err;

        res.send(''+data);
    });

});

app.get('/hello', (req, res) => {
    res.send('Hello world');
});

const messages=[];

app.get('/message', (req, res) => {

    res.json(messages);
});

app.post('/message', (req, res) => {

    console.log(req.headers);
    console.log(req.body);

    messages.push(req.body.msg);

    res.json();
});



app.listen(3291, function () {
    console.log('Example app listening on port 3291!');
});