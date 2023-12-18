import aside_left_menu from "../../../data/aside_left_menu";
import Aside_menu_item from "../menuitem_aside/menuitem_aside";
import al from './aside_left.module.scss';

export default function Aside_left() {

    let aside_menu = aside_left_menu.map(e => <Aside_menu_item key={e.nameHref[0]} {...e}/>)

    return <div className={al.aside_left}>
    <nav className={al.aside_nav_menu}>
        {aside_menu}
    </nav>

    </div>
}












{/* <ul id="nav1" class="dropdownv dropdownv-vertical">

    <li>
        <a href="/ru/pages/concerts/">
            Выставки, концерты
        </a>
    </li>

    <li>
        <a href="http://liart.ru/ru/pages/kr_plan/">
            Крупный план
        </a>
    </li>

    <li>
        <a href="http://liart.ru/ru/pages/concerts/04/">
            Передвижные выставки
        </a>
    </li>

    <li>
        <a href="/ru/pages/concerts/Virtual_exhibitions/">
            Виртуальные выставки
        </a>
    </li>

    <li>
        <a href="/ru/pages/seminars/">
            Конференции, семинары
        </a>
    </li>

    <li>
        <a href="/ru/pages/dostup/">
            Доступная среда
        </a>
    </li>

    <li className="dir">
        <a href="/ru/#" >
            Экскурсии
        </a>
        <ul>
            <li>
                <a href="/ru/pages/Myasoedov/">
                    экскурсия «Тайны городской усадьбы Мясоедова»
                </a>
            </li>

            <li><a href="/ru/pages/Vertinskiy/">
                пешеходная экскурсия «Москва Александра Вертинского»
            </a>
            </li>

            <li ><a href="/ru/pages/Dmitrovka/">
                пешеходная экскурсия «Как пройти в библиотеку: по Большой Дмитровке»
            </a>
            </li>

            <li ><a href="/ru/pages/Petrovskie/">
                экскурсия «Улица муз. Театральная и литературная жизнь Петровских линий 100 лет назад»
            </a>
            </li>
        </ul>
    </li>

    <li className="dir"><a href="http://liart.ru/ru/pages/colleague/">
        Коллегам</a>

        <ul>
            <li>
                <a href="http://liart.ru/ru/pages/colleague/methods/">
                    Методические документы
                </a>
            </li>

            <li>
                <a href="http://liart.ru/ru/pages/colleague/praktikum/">
                    Практикум
                </a>
            </li>

            <li>
                <a href="http://liart.ru/ru/pages/colleague/other/">
                    Другие предложения для наших коллег
                </a>
            </li>
        </ul>
    </li>

    <li>
        <a href="/ru/pages/proj">
            Проекты библиотеки
        </a>
    </li>

    <li>
        <a href="/ru/pages/izd">
            Издания РГБИ
        </a>
    </li>

    <li className="dir">
        <a href="/ru/pages/blag">
            Библиотека благодарит
        </a>

        <ul>
            <li ><a href="/ru/pages/blag/dar">
                Библиотека благодарит дарителей
            </a>
            </li>

            <li>
                <a href="/ru/pages/blag/popsovet">
                    Библиотека благодарит Попечительский Совет
                </a>
            </li>
        </ul>
    </li>

    <li className="dir">
        <a href="/ru/pages/section">
            Секция библиотек по искусству и музейных библиотек РБА
        </a>
        <ul>
            <li>
                <a href="http://www.rba.ru/activities/sections/02/membership/">
                    Членство и регистрация
                </a>
            </li>

            <li>
                <a href="http://www.rba.ru/activities/sections/02/sostav/">
                    Постоянный комитет
                </a>
            </li>

            <li>
                <a href="/ru/pages/section/section_zased">
                    Заседания и мероприятия секции
                </a>
            </li>

            <li>
                <a href="/ru/pages/section/section_plans">
                    Планы секции библиотек по искусству и музейных библиотек
                </a>
            </li>

            <li>
                <a href="/ru/pages/section/section_reports">
                    Ежегодные отчеты
                </a>
            </li>
        </ul>
    </li>

    <li>
        <a href="/ru/pages/vacancies">
            Вакансии
        </a>
    </li>

    <li>
        <a href="/ru/pages/Official_documents/" target="_blank">
            Официальные документы РГБИ
        </a>
    </li>

    <li className="dir">
        <a href="/ru/ask_librarian/" style="color: rgb(178, 42, 15); font-size: 18px;">
            Спроси библиографа
        </a>

        <ul>
            <li>
                <a href="http://liart.ru/ru/ask_librarian/ask" target="_blank">
                    Задать вопрос
                </a>
            </li>

            <li>
                <a href="/ru/ask_librarian/?category=1">
                    Тематические запросы
                </a>
            </li>

            <li>
                <a href="/ru/ask_librarian/?category=2">
                    Наличие изданий
                </a>
            </li>

            <li>
                <a href="/ru/ask_librarian/?category=4">
                Вопросы о работе РГБИ
            </a>
            </li>

            <li>
                <a href="/ru/ask_librarian/?category=6">
                    Отзывы и предложения
                </a>
            </li>

            <li>
                <a href="/ru/ask_librarian/?category=5">
                    Вне категорий
                </a>
            </li>
        </ul>
    </li>

</ul> */}