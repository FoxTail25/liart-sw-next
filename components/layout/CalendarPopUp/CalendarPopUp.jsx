import { useAmp } from 'next/amp';
import popup from './calendarPopUp.module.scss'
import { useState } from 'react';
import PopUpEvent from '../popUpEvent/popUpEvent';
import comparison from '../../../utils/calendar/comparison_start_end_date';

export default function CalendarPopUp({ ...props }) {
	const { setPopUp, ...data } = props;
	// console.log(data);
	const { thisMonthEvent: thisMonthEvents, index: indexArr } = data;

	// console.log(thisMonthEvents, +indexArr[0]);
	// let date = thisMonthEvents[+indexArr[0]].dateStart.slice(0, 10);
	// console.log(date)
	// let [eventData, setEventData] = useState();
	// let date = thisMonthEvents.dateStart[indexArr[0]]


	return <div className={popup.bg}>
		<div className={popup.container}>

			<button className={popup.close} onClick={() => setPopUp(null)}>+</button>
			<h2 className={popup.date}>{comparison(indexArr, thisMonthEvents)}</h2>

			<div className={popup.enventCont}>

				<button>l</button>

				<div className={popup.events}>
					{
						indexArr.map(e => <PopUpEvent key={e} {...thisMonthEvents[e]} />)
					}
				</div>

				<button>r</button>

			</div>

		</div>
	</div>
}