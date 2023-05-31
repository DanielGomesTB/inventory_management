require('dotenv').config();
const app = require('./app');
const dbConnection = require('./database/mySqlConnection');

const colors = {
	green: '\x1b[32m',
	cyan: '\x1b[36m',
	red: '\x1b[31m',
	reset: '\x1b[0m'
};

const PORT = process.env.API_PORT;

app.listen(PORT, async () => {
	console.info(
		`\nBackend server running on port ${colors.green}${PORT}${colors.reset}`,
		`\n➜  Local: ${colors.cyan}http://localhost:${PORT}/${colors.reset}`
	);
	try {
		const [result] = await dbConnection.execute('SELECT 1');
		if (result) console.info('➜  MySQL: connection OK\n');

	} catch(error) {
		console.info(`➜  MySQL: ${colors.red}unable to connect. ${error.code}${colors.reset}\n`);
	}
});