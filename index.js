const express = require("express");

const app = express();

app.listen(5005, () => {
    console.log("Server running on port 5005")
})

app.get('/', function (req, res) {
    res.status(200).json({
        message: "Development Server's Live"
    });
});