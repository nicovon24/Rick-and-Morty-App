const express = require("express");
const app = express();
const cors = require("cors");
const routerHome = require("./src/routes/home.js");
const routerCreatedChars = require("./src/routes/created_chars.js");
const routerChars = require("./src/routes/chars.js");
const routerUsers = require("./src/routes/users.js");
const { database } = require("./db.js");
const routerDB = require("./src/routes/db.js");
const {
	saveApiData,
} = require("./src/controllers/api/characters/getCharsData.js");

let PORT = 3001;
let main_url = `http://localhost:${PORT}/api`;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/db", routerDB);
app.use("/api", routerHome);
app.use("/api/detail", routerChars);
app.use("/api/created_chars", routerCreatedChars);
app.use("/api/users", routerUsers);

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

database.sync({ force: false }).then((res) => {
	saveApiData();
	app.listen(PORT, () => {
		console.log(`app is listening on port ${PORT}...`);
		console.log(`Probe with ` + main_url + "...");
	});
});

app.all("*", (req, res) => {
	res.status(404).send("<h3>resource not found</h3>");
});

module.exports = { PORT, main_url };
