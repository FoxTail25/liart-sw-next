import { useEffect, useRef, useState } from 'react';
import cb from './calendar.module.scss';
// import axios from 'axios';


// export async function getServerSideProps() {
// 	let repCalend = 5
// 	// Fetch data from external API
// 	let reCalend = await fetch('http://localhost:3000/api/hi').then(res => res.json())
// 	console.log('calend_server', reCalend)
// 	// Pass data to the page via props
// 	return { props: { repCalend, reCalend } }
// }


export default function Calendar({ repCalend, reCalend }) {

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

	}



	let calend_block = useRef();

	useEffect(() => {
		getArrDate(calendarMonth)
		calend_block.current.innerHTML = '';
		calend_block.current.appendChild(getCalendarTable());
		getEvent()
	}, [calendarMonth])

	function minusMonth() {
		let newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, calendarMonth.getDate())
		setCalendarMonth(newDate)
	}
	function plusMonth() {
		let newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, calendarMonth.getDate())
		setCalendarMonth(newDate)
	}

	async function getEvent() {
		let res = await fetch('http://localhost:3000/api/calend_event').then(res => res.json())
		console.log(res)
	}


	return <div className={cb.calend_block}>
		{/* {console.log('repo res', repo, res)} */}

		<button className={cb.arrow_left} onClick={minusMonth} title={`месяц ${new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1).toLocaleString('ru-RU', { month: "long" })}`}>&lt;</button>

		<div ref={calend_block} className={cb.calendar_contain} />

		<button className={cb.arrow_right} onClick={plusMonth} title={`месяц ${new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1).toLocaleString('ru-RU', { month: "long" })}`}>&gt;</button>

	</div>
}