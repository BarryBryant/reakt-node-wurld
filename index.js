const express = require("express");
const app = express(); // generates a new application

app.get("/", (req, res) => {
	res.send({ hi: "supppp" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
