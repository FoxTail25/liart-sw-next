import pool from './bd.js';

class Connector {

	async getMonth(month, year) {

		console.log(year)

		const dateStart = new Date(+year, month, 1).toISOString()
		const dateEnd = new Date(+year, (month+1 ), 1).toISOString()

		console.log(dateStart, dateEnd)
		
		let answer = await pool.query(`select * from year${year} where datestart between '${dateStart}' and  '${dateEnd}' order by datestart`)

		return answer.rows
	}
}

const calendarConnect = new Connector()

export default calendarConnect