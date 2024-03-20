const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

const posts = require('./routes/posts');
const users = require('./routes/users');

const app = express();

dotenv.config();

app.use(cors());
app.use('/posts', posts);
app.use('/users', users);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});