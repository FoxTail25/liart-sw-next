
async function test() {

	let event = await fetch('http://calendar.liart.ru/api/month_events.php').then(ev => ev.json()).catch(err => console.log(err))
	console.log(event)
}