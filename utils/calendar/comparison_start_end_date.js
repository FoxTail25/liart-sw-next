// функция для сравнения дат начала и конца мероприятия в календаре.
export default function comparison(indexArr, monthEvent) {
	let dateStart;
	let dateEnd;
	// console.log(indexArr, +indexArr[0])

	// if (indexArr.length == 1) {
	dateStart = monthEvent[+indexArr[0]].dateStart.slice(0, 10);
	dateEnd = monthEvent[+indexArr[0]].dateEnd.slice(0, 10);

	// console.log(dateStart, dateEnd)

	return dateStart == dateEnd
		? dateStart
		: `С ${dateStart} по ${dateEnd}`
	// }

}