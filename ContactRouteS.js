const express = require('express');
const app = express();
const port = 3000;

app.get('/contact', (req, res) => {
    res.send('Contact Us page');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});