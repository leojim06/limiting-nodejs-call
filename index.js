const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
    return res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
