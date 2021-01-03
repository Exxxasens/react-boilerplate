const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.use((req, res, next) => {
    return res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(8000, () => console.log('server is listen on port 8000'));