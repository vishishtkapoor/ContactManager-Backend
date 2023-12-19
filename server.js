const express = require("express");

const app = express();

const port = 3000;

app.use("/api/contact", require("routes\ContactRoutes.js"))


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});