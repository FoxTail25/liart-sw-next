import { useEffect, useRef, useState } from 'react';
import cb from './calendar.module.scss';
import CalendarPopUp from '../CalendarPopUp/CalendarPopUp';



export default function Calendar() {

	let [calendarMonth, setCalendarMonth] = useState(new Date());

	let [popUp, setPopUp] = useState(null);


	let arrDate = [];
	let g_date;

	let calendarHTML;
	let paintedCalendarMonth;



	function getCalendarTable() {

		let arrWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

		let calendar = document.createElement('table');
		const tableName = document.createElement('caption')
		tableName.innerHTML = `Календарь на ${g_date.toLocaleString('ru-Ru', { month: 'long' })} <br/> ${g_date.getFullYear()} года`;
		tableName.dataset.month = g_date.getMonth()
		paintedCalendarMonth = g_date.getMonth()
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

		return calendarHTML = calendar
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
		getCalendarTable()
		calend_block.current.appendChild(calendarHTML);
		getEvent(calendarMonth.getMonth(), calendarMonth.getFullYear())
	}, [calendarMonth])



	async function getEvent(month = 12, year = 2024) {
		console.log('месяц', month)
		let res_bd = await fetch(`http://localhost:3000/api/calendar_bd/?month=${month}&year=${year}`).then(res => res.json()).catch(err => console.log('ошибка....', err));
		console.log('res_bd', res_bd)

		let res = await fetch('http://localhost:3000/api/calendar').then(res => res.json()).catch(err => console.log('ошибка....', err));

		console.log(res)
		// let res = await fetch('http://192.168.1.39:3000/api/calendar').then(res => res.json()).catch(err => console.log('ошибка....', err));

		// let res = await fetch('http://calendar.liart.ru/api/month_events.php', { mode: 'no-cors' }).then(ev => ev).catch(err => { console.log('error:', err); return err })
		// console.log(typeof res, res.body)



		paintEventOnCalendar(res)
	}

	function cangeMonth(mod) {
		let newDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + mod, calendarMonth.getDate())
		setCalendarMonth(newDate)
	}

	function getMonthName(mod) {
		let date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + mod)
		return date.toLocaleString('ru-RU', { month: "long" })
	}

	function paintEventOnCalendar(arrEvent) {

		let thisMonthEvent = arrEvent.filter(e => e.dateStart.includes(`${(paintedCalendarMonth + 1 + '').padStart(2, '0')}.2024`));

		let ThisMounthDay = calendarHTML.querySelectorAll('tr td')

		let elemHasEventListener_color = [];
		let elemHasEventListener_func = [];

		thisMonthEvent.forEach((elem, index) => {
			let eventDate = +(elem.dateStart.slice(0, 2));
			let eventTitle = elem.title;
			let date = [...ThisMounthDay].filter(date => date.textContent == eventDate)[0]

			if (!elemHasEventListener_color.includes(date)) {

				function changeBgAndColor() {
					let a = this.style.color;
					let b = this.style.background;
					this.style.color = b;
					this.style.background = a;
				}

				date.addEventListener('mouseover', changeBgAndColor)
				date.addEventListener('mouseleave', changeBgAndColor)
				elemHasEventListener_color.push(date)
			}
			setTimeout(() => {
				date.title += eventTitle + '. '
				date.dataset.eventIndex = checkDataSet(date, index);
				date.style.cursor = 'pointer';
				date.style.color = 'var(--background-aside-left)';
				date.style.background = 'var(--font-aside-color)';

				if (!elemHasEventListener_func.includes(date)) {
					date.addEventListener('click', function () {
						setPopUp({
							thisMonthEvent, index: (this.dataset.eventIndex).split(',')
						})
					});
					elemHasEventListener_func.push(date)
				}
			}, index * 30)

		})
	}

	function checkDataSet(elem, index) {
		return elem.dataset.eventIndex
			? [elem.dataset.eventIndex, index]
			: [index]
	};



	return <div className={cb.calend_block}>

		<button className={cb.arrow_left} onClick={() => cangeMonth(-1)} title={`месяц ${getMonthName(-1)}`}>&lt;</button>

		<div ref={calend_block} className={cb.calendar_contain} />

		<button className={cb.arrow_right} onClick={() => cangeMonth(1)} title={`месяц ${getMonthName(1)}`}>&gt;</button>

		{
			popUp && <CalendarPopUp {...{ ...popUp, setPopUp }} />
		}

	</div>
}