import TodayEvent from '../today_event/TodayEvent';
import t from './today.module.scss'

let eventArr = await fetch(`http://localhost:3000/api/today_bd`).then(res => res.json()).catch(err => console.log('ошибка....', err));
// console.log('eventArr', eventArr)

const todayEvent = eventArr.map(e => <TodayEvent key={e.id} {...e}/>)


export default function Today() {

	return<div className={t.container}>
	<h2>сегодня в РГБИ</h2>
	{...todayEvent}
	</div>

}