const express = require("express");
const Lessons = require("./models/dbHelpers.js");
const app = express();

app.use(express.json());

const PORT = 5000;

//--------------------POST-------------------------------------------

app.post("/api/lessons", (req, res) => {
	Lessons.add(req.body)
		.then((lesson) => {
			res.status(200).json(lesson);
		})
		.catch((error) => {
			res.status(500).json({ message: "cannot add lesson" });
		});
});

//--------------------GET--------------------------------------------
app.get("/", (req, res) => {
	res.json({ message: "Why, Hello there!" });
});

//--------------------FIND-------------------------------------------
app.get("/api/lessons", (req, res) => {
	Lessons.find()
		.then((lessons) => {
			res.status(200).json(lessons);
		})
		.catch((error) => {
			res.status(500).json({ message: "Unable to retreive lessons" });
		});
});
//--------------------FINDBYID---------------------------------------
app.get("/api/lessons/:id", (req, res) => {
	const { id } = req.params;
	Lessons.findById(id)
		.then((lesson) => {
			if (lesson) {
				res.status(200).json(lesson);
			} else {
				res.status(404).json({ message: "Record not found" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Unable to complete task" });
		});
});
//--------------------PATCH------------------------------------------
app.patch("/api/lessons/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Lessons.update(id, changes)
		.then((lesson) => {
			if (lesson) {
				res.status(200).json(lesson);
			} else {
				res.status(404).json({ message: "Record not found" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error });
		});
});

//--------------------DELETE-----------------------------------------
app.delete("/api/lessons/:id", (req, res) => {
	const { id } = req.params;
	Lessons.remove(id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ message: "Record deleted successfully" });
			} else {
				res.status(404).json({ message: "Record not found" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Unable to complete task" });
		});
});
// -------------------LISTEN-----------------------------------------
app.listen(PORT, (req, res) => {
	console.log(`\n====== SERVER LISTENING ON PORT: ${PORT} ======\n`);
});