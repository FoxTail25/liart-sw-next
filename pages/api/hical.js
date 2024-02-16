export default async function handler(req, res) {
	// console.log(req.method)
	// console.log(req.query)
	let res22 = await fetch('http://calendar.liart.ru/api/month_events.php').then(res => res.json())
	console.log(res22)

	res.status(200).json(res22)
}