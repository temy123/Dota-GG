import initSqlJs from 'sql.js';
const WASM_URL =
	'https://raw.githubusercontent.com/temy123/Dota-GG/main/app/static/dist/sql-wasm.wasm';
const DB_URL = 'https://raw.githubusercontent.com/temy123/Dota-GG-DB/main/od.db';

let sqlModel;

async function getHeroData() {
	let heroDataArray = [];
	var stmt = sqlModel.prepare('select * from Hero');
	while (stmt.step()) {
		var row = stmt.getAsObject();
		heroDataArray.push(row);
	}

	stmt.free();
	return heroDataArray;
}

async function fetchHeroData() {
	let db = await fetch(DB_URL);
	let result = await db.arrayBuffer();
	result = new Uint8Array(result);
	return result;
}

async function initSqlJsModel() {
	const config = {
		// locateFile: (file) => `/dist/${file}`
		locateFile: (file) => WASM_URL
	};
	const sql = await initSqlJs(config);
	const sqlString = await fetchHeroData();
	sqlModel = new sql.Database(sqlString);
}

export async function load({ fetch }) {
	await initSqlJsModel();

	const result = {
		data: getHeroData()
	};

	return result;
}
