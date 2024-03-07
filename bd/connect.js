import pool from './bd.js';

class Connector {

	async getMonth(date) {
		const year = date.getFullYear();
		// const getMonth = date.getMonth();

		// let answer = await pool.query(`select * from year${year}`)
		// return answer
		console.log(year)

	}
}

const calendarConnect = new Connector()

export default calendarConnect