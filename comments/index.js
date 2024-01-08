const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {randomBytes} = require('crypto');
const axios = require('axios');

const app = express();
app.use(cors())

app.use(bodyParser.json());

const commentsByPostId = [];

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
})

app.post('/posts/:id/comments', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comment = {id, content, status: 'pending'};

    const comments = commentsByPostId[req.params.id] || []

    comments.push(comment);

    commentsByPostId[req.params.id] = comments;

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            ...comment,
            postId: req.params.id
        }
    })

    res.status(201).json(comments);
})

app.post('/events', (req, res) => {
    console.log('Received event', req.body.type)

    res.send({});
})

app.listen(4001, () => {
    console.log('Listening on 4001')
})