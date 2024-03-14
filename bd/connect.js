import pool from './bd.js';

class Connector {

	async getMonth(date) {
		const year = date.getFullYear();
		// const getMonth = date.getMonth();

		let answer = await pool.query(`select * from year${year}`)
		// console.log(answer)
		// console.log('connect', year)
		return answer.rows

	}
}

const calendarConnect = new Connector()

export default calendarConnect