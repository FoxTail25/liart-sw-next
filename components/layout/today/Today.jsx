import { useEffect, useState } from 'react';
import TodayEvent from '../today_event/TodayEvent';
import t from './today.module.scss'




export default function Today() {
	
	const [todayEvent, setTodayEvent] = useState('')
	
	
	async function getevent() {
		let eventArr = await fetch(`http://localhost:3000/api/today_bd`).then(res => res.json()).catch(err => console.log('ошибка....', err));
		return eventArr
	}
	
	useEffect(() => {
		getevent().then(res => setTodayEvent(res.map(e => <TodayEvent key={e.id} {...e}/>)));
		console.log('eventArr', todayEvent)		
	},[])
	
	return<div className={t.container}>
	<h2>сегодня в РГБИ</h2>
	{...todayEvent}
	</div>

}