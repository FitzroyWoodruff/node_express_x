// where we write the knex queries
const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.development);

// add, find, findById, remove, update
module.exports = {
	add,
	find,
	findById,
	remove,
	update,
};

async function add(lesson) {
	const [id] = await db("lessons").insert(lesson);
	return id;
}

function find() {
	return db("lessons");
}

function findById(id) {
	return db("lessons").where({ id }).first();
}

function remove(id) {
	return db("lessons").where({ id }).del();
}

function update(id, changes) {
	return db("lessons")
		.where({ id })
		.update(changes)
		.then(() => {
			return findById(id);
		});
}