import { useAmp } from 'next/amp';
import popup from './calendarPopUp.module.scss'
import { useState } from 'react';
import PopUpEvent from '../popUpEvent/popUpEvent';

export default function CalendarPopUp({ ...props }) {
	const { setPopUp, ...data } = props;
	// console.log(data);
	const { thisMonthEvent: thisMonthEvents, index: indexArr } = data;

	// console.log(thisMonthEvents, +indexArr[0]);
	let date = thisMonthEvents[+indexArr[0]].dateStart.slice(0, 10);

	// let [eventData, setEventData] = useState();
	// let date = thisMonthEvents.dateStart[indexArr[0]]


	return <div className={popup.bg}>
		<div className={popup.container}>

			<button onClick={() => setPopUp(null)}>+</button>
			<div className={popup.events}>
				<h2>{date}</h2>
				{
					indexArr.map(e => <PopUpEvent key={e} {...thisMonthEvents[e]} />)
				}

			</div>
		</div>
	</div>
}