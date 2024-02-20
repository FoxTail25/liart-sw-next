import { useAmp } from 'next/amp';
import popup from './calendarPopUp.module.scss'
import { useState } from 'react';
import PopUpEvent from '../popUpEvent/popUpEvent';

export default function CalendarPopUp({ ...props }) {
	const { setPopUp, ...data } = props;
	// console.log(data);
	const { thisMonthEvent: thisMonthEvents, index: indexArr } = data;

	console.log(thisMonthEvents, indexArr);

	// let [eventData, setEventData] = useState();

	return <div className={popup.bg}>
		<div className={popup.container}>

			<button onClick={() => setPopUp(null)}>+</button>
			{
				indexArr.map(e => <PopUpEvent key={e} {...thisMonthEvents[e]} />)
			}

		</div>
	</div>
}