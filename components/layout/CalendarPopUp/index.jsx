import popup from './calendarPopUp.module.scss'

export default function CalendarPopUp({ ...props }) {
	const { setPopUp, ...data } = props;
	console.log(data)
	return <div className={popup.bg}>
		<div className={popup.container}>

			<button onClick={() => setPopUp(null)}>+</button>
			{data.description}

		</div>
	</div>
}