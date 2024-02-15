import { useEffect, useRef } from 'react';
import cb from './calendar.module.scss';

export default function Calendar() {

	let arrDate = [];
	let g_date;

	function getCalendarTable() {

		let arrWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

		let calendar = document.createElement('table');
		const tableName = document.createElement('caption')
		tableName.textContent = `Календарь на ${g_date.toLocaleString('ru-Ru', { month: 'long' })}`
		calendar.appendChild(tableName)

		let th = document.createElement('thead');

		for (let i = 0; i < arrWeek.length; i++) {
			let td = document.createElement('td');
			td.textContent = arrWeek[i];
			th.appendChild(td);
		}
		calendar.appendChild(th);

		let tb = document.createElement('tbody')

		for (let i = 1; i <= 5; i++) {
			let tr = document.createElement('tr')
			for (let j = 0; j < arrWeek.length; j++) {
				let td = document.createElement('td');
				td.textContent = arrDate[7 * (i - 1) + j].date
				tr.appendChild(td)
			}
			tb.appendChild(tr)
		}
		calendar.appendChild(tb)

		return calendar
	}

	function getArrDate(date) {
		g_date = date
		let thisMonth = date.getMonth();
		let thisYear = date.getFullYear();
		let firsWeekDayThisMonth = new Date(thisYear, thisMonth, 1).getDay();
		if (firsWeekDayThisMonth == 0) {
			firsWeekDayThisMonth = 7;
		}
		let lastDateThsMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
		console.log(lastDateThsMonth);

		for (let index = 0; index < 35; index++) {
			if (index + 1 < firsWeekDayThisMonth) {
				// let date = new Date(thisYear, thisMonth, (1 - firsWeekDayThisMonth + index + 1)).getDate();
				// arrDate.push(date);
				arrDate.push('');
			} else if (index > lastDateThsMonth + firsWeekDayThisMonth - 2) {
				// let date = new Date(thisYear, thisMonth, (35 - (35 - index - lastDateThsMonth) + thisMonth - 1)).getDate()
				// let date = new Date(thisYear, thisMonth, index).getDate() - 2
				// arrDate.push(date);
				arrDate.push('')
			} else {
				arrDate.push({ date: index + 1 - firsWeekDayThisMonth + 1, month: thisMonth })
			}
		}

		console.log(arrDate)

	}

	let calend_block = useRef();

	useEffect(() => {
		getArrDate(new Date(2024, 1, 1))
		calend_block.current.innerHTML = '';
		calend_block.current.appendChild(getCalendarTable());
	}, [])

	return <div className={cb.calend_block}>

		<button className={cb.arrow_left} >l</button>
		<div ref={calend_block} className={cb.calendar_contain} />
		<button className={cb.arrow_right} >r</button>

	</div>
}