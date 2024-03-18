import te from './todayevent.module.scss';

export default function TodayEvent({datestart, dateend, title, description, ...rest}) {


	function reformationDate(date) {
		
		const options = {
			// weekday: 'long',
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		};
		
		return new Date(date).toLocaleDateString('ru-RU', options)
	}

	return <div className={te.container}>
		<p className={te.title}>{title}</p>
		<p>начало: {reformationDate(datestart)}</p>
		<p>конец: {reformationDate(dateend)}</p>
		<hr/>
	</div>
}