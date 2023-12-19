const express = require("express");

const app = express();

const port = 3000;

app.get("/api/contact", (req,res) => {
    res.json({message: "get all contact"});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});