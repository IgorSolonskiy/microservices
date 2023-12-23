const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();

app.use(bodyParser.json());

const commentsByPostId = [];

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
})

app.post('/posts/:id/comments', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comment = {id, content};

    const comments = commentsByPostId[req.params.id] || []

    comments.push(comment);

    commentsByPostId[req.params.id] = comments;

    res.status(201).json(comments);
})

app.listen(4001, () => {
    console.log('Listening on 4001')
})