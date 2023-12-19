const express = require('express');
const app = express.Router();
const port = 3000;

Router.route("/").get((req, res) => {
    res.status(200).json({ message: "get all contact" })
});

Router.route("/").post((req, res) => {
    res.status(200).json({ message: "get all contact" })
});

Router.route("/").put((req, res) => {
    res.status(200).json({ message: "update contact" })
});

Router.route("/").delete((req, res) => {
    res.status(200).json({ message: "get all contact" })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});