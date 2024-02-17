export default async function handler(req, res) {
	// console.log(req.method)
	// console.log(req.query)
	let event = await fetch('http://calendar.liart.ru/api/month_events.php').then(res => res.json())
	// console.log(event)

	res.status(200).json(event)
}