import calendarConnect from '../../bd/connect';

export default async function handler(req, res) {
	console.log(req.query)
	let month = +req.query.month
	let year = +req.query.year

	let event_bd = await calendarConnect.getMonth(month, year)
	// console.log('event', event_bd)

	// let event = await fetch('http://calendar.liart.ru/api/month_events.php').then(ev => ev.json()).catch(err => { console.log(err); return err })
	// console.log(event)

	res.status(200).json(event_bd)
}