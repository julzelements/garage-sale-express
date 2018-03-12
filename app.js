const express = require('express');

const port = '3000';
let app = express();
app.use("/", function (req, res) {
     res.send("hello world!")
})

app.listen(port);