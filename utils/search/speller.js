export default async function yandexSpeller(text) {
	// console.log(text)
	let sendingText = text
	let answer = await fetch(`https://speller.yandex.net/services/spellservice.json/checkText?text=${sendingText}`)
		.then(res => res.text())
		.then(res => JSON.parse(res))
		.then(res => res)

	return answer.length < 1
		? text
		: changeText(answer, text)
		
}

function changeText(arrWord, text) {
	for(let word of arrWord) {
		const oldWord = word.word;
		const newword = word.s[0]
		// console.log('old ', oldWord, ' new ', newword)
		text = text.replace(oldWord, newword)
	}
	return text
}