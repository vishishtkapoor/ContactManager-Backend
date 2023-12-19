const express = require('express');
const app = express.Router();
const port = 3000;

Router.route((req, res) => {
    res.json({ message: "get all contact" });})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});