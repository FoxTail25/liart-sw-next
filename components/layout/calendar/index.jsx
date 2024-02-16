import { useEffect, useRef, useState } from 'react';
import cb from './calendar.module.scss';

export default function Calendar() {

	let [calendarMonth, setCalendarMonth] = useState(new Date())

	let arrDate = [];
	let g_date;

	function getCalendarTable() {

		let arrWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

		let calendar = document.createElement('table');
		const tableName = document.createElement('caption')
		tableName.innerHTML = `Календарь на ${g_date.toLocaleString('ru-Ru', { month: 'long' })} <br/> ${g_date.getFullYear()} года`
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
		// arrDate =[]
		g_date = date
		let thisMonth = date.getMonth();
		let thisYear = date.getFullYear();
		let firsWeekDayThisMonth = new Date(thisYear, thisMonth, 1).getDay();
		if (firsWeekDayThisMonth == 0) {
			firsWeekDayThisMonth = 7;
		}
		let lastDateThsMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
		// console.log(lastDateThsMonth);
		// let nextMonthDate = 1;
		for (let index = 0; index < 35; index++) {
			if (index + 1 < firsWeekDayThisMonth) {
				// let date = new Date(thisYear, thisMonth, (1 - firsWeekDayThisMonth + index + 1)).getDate();
				// arrDate.push({ date, month: thisMonth - 1 });
				arrDate.push('');
			} else if (index > lastDateThsMonth + firsWeekDayThisMonth - 2) {

				// arrDate.push({ date:nextMonthDate++, month: thisMonth + 1 });
				arrDate.push('')
			} else {
				arrDate.push({ date: index + 1 - firsWeekDayThisMonth + 1, month: thisMonth })
			}
		}

		// console.log(arrDate)

	}

	let calend_block = useRef();

	useEffect(() => {
		getArrDate(calendarMonth)
		calend_block.current.innerHTML = '';
		calend_block.current.appendChild(getCalendarTable());
	}, [calendarMonth])

	function minusMonth() {
		// console.log('--month')
		let newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, calendarMonth.getDate())
		// console.log(newDate)
		setCalendarMonth(newDate)
	}
	function plusMonth() {
		// console.log('++month')
		let newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, calendarMonth.getDate())
		// console.log(newDate)
		setCalendarMonth(newDate)
	}

	return <div className={cb.calend_block}>

		<button className={cb.arrow_left} onClick={minusMonth} title='предыдущий месяц'>&lt;&lt;</button>

		<div ref={calend_block} className={cb.calendar_contain} />

		<button className={cb.arrow_right} onClick={plusMonth} title='следующий месяц'>&gt;&gt;</button>

	</div>
}