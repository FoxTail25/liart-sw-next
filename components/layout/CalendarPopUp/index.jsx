import popup from './calendarPopUp.module.scss'

export default function CalendarPopUp({ ...data }) {
	const { setPopUp, ...popUp } = data;
	console.log(popUp)
	return <div className={popup.bg}>
		{/* <div className='' */}
		<button onClick={() => setPopUp(null)}>close</button>
	</div>
}