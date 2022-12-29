const app = require("./api/server");
// -------------------LISTEN-----------------------------------------
const PORT = 5000;

app.listen(PORT, (req, res) => {
	console.log(`\n====== SERVER LISTENING ON PORT: ${PORT} ======\n`);
});
