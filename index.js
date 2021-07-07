const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

const PORT = 3000;

const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 2,
    handler: function(req, res) {
        return res.status(429).json({
            error: 'You sent too many requests. Plase wait a while then try again'
        })
    }
});

app.use(apiRequestLimiter);

app.get('/', function (req, res) {
    return res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
