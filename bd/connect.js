import pool from './bd.js';

class Connector {

	async getMonth(month, year) {

		// console.log(year)

		const dateStart = new Date(+year, month, 1).toISOString()
		const dateEnd = new Date(+year, (month+1 ), 1).toISOString()

		// console.log(dateStart, dateEnd)
		
		let answer = await pool.query(`select * from year${year} where datestart between '${dateStart}' and '${dateEnd}' or dateend between '${dateStart}' and  '${dateEnd}' order by datestart`)
		// pool.end()

		return answer.rows
	}

	async getToday() {
		// pool.open()
		const date = new Date()
		const isoDate = date.toISOString()
		const year = date.getFullYear()

		let answer = await pool.query(`select * from year${year} where datestart <= '${isoDate}' and  dateend >= '${isoDate}' order by datestart`)

		// pool.end()

		return answer.rows
	}
}

const calendarConnect = new Connector()

export default calendarConnect