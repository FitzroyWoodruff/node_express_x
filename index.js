require("dotenv").config();
const app = require("./api/server");
// -------------------LISTEN-----------------------------------------
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
	console.log(`\n====== SERVER LISTENING ON PORT: ${port} ======\n`);
});
