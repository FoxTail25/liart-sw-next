import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

const pool = new pg.Pool({
	host: process.env.CALEND_HOST,
	port: process.env.CALEND_PORT,
	user: process.env.CALEND_USER,
	password: process.env.CALEND_PASSWORD,
	database: process.env.CALEND_DB
})

export default pool