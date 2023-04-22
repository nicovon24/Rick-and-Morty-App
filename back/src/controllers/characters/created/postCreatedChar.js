let created_chars = require("../../../utils/created_chars.js");
const { Character } = require("../../../../db");

function postCreatedChar(res, body) {
	try {
		let { name, status, species, origin, gender, image } = body;
		if (body) {
			let newData = { name, status, species, origin, gender, image };
			const char = Character.create({
				name,
				status,
				species,
				origin,
				gender,
				image,
			});
			res
				.status(200)
				.json({ success: true, results: [...created_chars.results, newData] });
		}
		else{
			throw new Error("Could not create the character");
		}
	} catch (error) {
		console.log(error.message);
		res.status(404).json({ error: error.message });
	}
}

module.exports = postCreatedChar;
