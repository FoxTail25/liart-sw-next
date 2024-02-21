import { useAmp } from 'next/amp';
import popup from './calendarPopUp.module.scss'
import { useState } from 'react';
import PopUpEvent from '../popUpEvent/popUpEvent';
import comparison from '../../../utils/calendar/comparison_start_end_date';

export default function CalendarPopUp({ ...props }) {
	const { setPopUp, ...data } = props;
	const { thisMonthEvent: thisMonthEvents, index: indexArr } = data;

	let [index, setIndex] = useState(indexArr)


	let tmp = {};
	thisMonthEvents.forEach((element, ind) => {
		let data = element.dateStart.slice(0, 10);
		// console.log(data, ind)
		if (!tmp[data]) {
			tmp[data] = [ind.toString()]
		} else {
			tmp[data].push(ind.toString())
		}
	});
	let indexOfEvent = Object.values(tmp)
	let indexOfEventStr = indexOfEvent.map(e => e.join())
	// console.log(indexOfEvent)

	// function prevEvent() {
	// console.log('left btn')
	// console.log(index)
	// console.log((index.join() - 1).split())
	// setIndex(index.join() - 1)
	// }

	function changeEvent(n) {
		let i = indexOfEventStr.indexOf(index.join());
		if (i == 0) {
			i = indexOfEvent.length - 1
		} else if (i == indexOfEvent.length - 1) {
			i = -1;
		}
		console.log('nnnnn', i);
		// console.log('right btn')
		// console.log(index)
		// console.log(indexOfEventStr)
		// console.log((index.join() + 1).split())
		setIndex(indexOfEvent[i + n])

	}

	// let data = 


	return <div className={popup.bg}>
		<div className={popup.container}>

			<button className={popup.close} onClick={() => setPopUp(null)}>+</button>
			<h2 className={popup.date}>{comparison(index, thisMonthEvents)}</h2>

			<div className={popup.enventCont}>

				<button onClick={() => changeEvent(-1)}>l</button>

				<div className={popup.events}>
					{
						index.map(e => <PopUpEvent key={e} {...thisMonthEvents[e]} />)
					}
				</div>

				<button onClick={() => changeEvent(1)}>r</button>

			</div>

		</div>
	</div>
}