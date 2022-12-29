const express = require("express");

const lessonsRouter = require("../Routes/lessons-routes.js");

const messagesRouter = require("../Routes/messages-routes.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Why, Hello there!" });
});

app.use("/api/lessons", lessonsRouter);
app.use("/api/messages", messagesRouter);

module.exports = app;
