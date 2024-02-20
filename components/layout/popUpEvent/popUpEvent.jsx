import pe from './popUpEvent.module.scss'

export default function PopUpEvent({ dateStart, dateEnd, location, description, title, ...props }) {
	// console.log(props)

	return <div className={pe.eventContainer}>
		{/* <h2>{dateStart.slice(0, 10)}</h2> */}
		<h2>{title}</h2>
		<h3>Начало: {dateStart.slice(-5)}. Окончание {dateEnd.slice(-5)}</h3>
		<p>{description}</p>
	</div>
}