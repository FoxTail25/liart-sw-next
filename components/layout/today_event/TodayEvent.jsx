export default function TodayEvent({datestart, dateend, title, description, ...rest}) {

	// console.log('todayEvent', rest)
	// datestart = new Date(datestart).toLocaleDateString('ru-RU')
	function reformationDate(date) {
		
		const options = {
			// weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		};
		
		return new Date(date).toLocaleDateString('ru-RU', options)
	}

	return <>
		<p>{title}</p>
		<p>начало: {reformationDate(datestart)}</p>
		<p>конец: {reformationDate(dateend)}</p>
		<hr/>
	</>
}