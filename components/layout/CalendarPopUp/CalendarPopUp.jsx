
import popup from './calendarPopUp.module.scss';
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
		if (!tmp[data]) {
			tmp[data] = [ind.toString()]
		} else {
			tmp[data].push(ind.toString())
		}
	});
	let indexOfEvent = Object.values(tmp)
	let indexOfEventStr = indexOfEvent.map(e => e.join())


	function changeEvent(n) {
		let i = indexOfEventStr.indexOf(index.join());
		if (i == 0 && n == -1) {
			i = indexOfEvent.length
		} else if (i == indexOfEvent.length - 1 && n == 1) {
			i = -1;
		}
		// console.log('nnnnn', i);

		setIndex(indexOfEvent[i + n])

	}



	return <div className={popup.bg}>
		<div className={popup.container}>

			<button className={popup.close} onClick={() => setPopUp(null)}>+</button>
			<h2 className={popup.date}>{comparison(index, thisMonthEvents)}</h2>

			<div className={popup.enventCont}>

				<button className={popup.prev} onClick={() => changeEvent(-1)}>

					<svg fill="var(--font-aside-color)" height="30px" width="30px" version="1.1" id="left_arrow"
						viewBox="0 0 55.752 55.752" >
						<g>
							<path d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001
		c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637
		c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727
		c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"/>
						</g>
					</svg>
				</button>

				<div className={popup.events}>
					{
						index.map(e => <PopUpEvent key={e} {...thisMonthEvents[e]} />)
					}
				</div>

				<button className={popup.next} onClick={() => changeEvent(1)}>
					<svg fill="var(--font-aside-color)" height="30px" width="30px" version="1.1" id="left_arrow"
						viewBox="0 0 55.752 55.752" >
						<g>
							<path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001
		c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58
		s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912
		C44.605,26.413,44.086,24.993,43.006,23.916z"/>
						</g>
					</svg>
				</button>

			</div>

		</div>
	</div>
}