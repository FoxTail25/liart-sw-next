import { useRef, useState } from 'react'
import s from './search.module.scss'
import yandexSpeller from '../../../utils/search/speller'


export default function Search() {

	const [input, setInput] = useState('')
	const [search, setSearch] = useState('opac')
	const searchString = useRef()
	const opacForm = useRef()
	const siteForm = useRef()


	function inputHandler(e) {
		setInput(e.target.value)
	}


	async function onSubmit(event) {
		event.preventDefault()

		let text = searchString.current.value;
		const textSpelled = await yandexSpeller(text);
		searchString.current.value = textSpelled;

		if (search == 'opac') {
			opacForm.current.submit()
		} else {
			siteForm.current.children[0].value = '';
			siteForm.current.children[0].value = textSpelled + ' site:liart.ru';
			siteForm.current.submit()
		}



	}


	return <>
		<div className={s.search_container}>

				<div className={s.check}>
					<label>
						<input type="radio" name='search' defaultChecked onChange={() => setSearch('opac')} />&nbsp;Поиск&nbsp;в&nbsp;базе&nbsp;OPAC
					</label>

					<label>
						<input type="radio" name='search'
							onChange={() => setSearch('yandex')} />&nbsp;Yandex поиск по сайту
					</label>
				</div>

			<form ref={opacForm}
				onSubmit={onSubmit}
				target="_blank"
				method="POST"
				action="http://opac.liart.local/find"
			>

				<div className={s.searchblock}>

					<input name="iddb" type="hidden" value="307" />

					<input
						id='AH'
						name='AH'
						className={s.searchstring}
						ref={searchString}
						type={input.length < 2 ? 'text' : 'search'}
						value={input}
						onChange={inputHandler}
						placeholder='введите название произведения или имя автора' />
					<button
						className={s.search_btn}
						disabled={input.length < 2 ? true : false}
						// {(input.length < 2) && disabled}
						// onClick={func}
						type="submit">
						Поиск
					</button>
				</div>

			</form>


			<form
				ref={siteForm}
				onSubmit={onSubmit}
				action="https://ya.ru/"
				name="f"
				target="_blank"
				className={s.yandexform}
			>
				<input id="sitetext" name="q" size="65" type="text" />

				<input type="hidden" name="hl" value="ru" />
			</form>

		</div>
	</>
}