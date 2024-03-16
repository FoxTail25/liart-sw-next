
import calendarConnect from '../../bd/connect';

export default async function handler(req, res) {
	
	let today_event = await calendarConnect.getToday()

	res.status(200).json(today_event)
}