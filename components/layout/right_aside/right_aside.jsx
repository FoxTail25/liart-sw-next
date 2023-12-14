import Link from "next/link";

export default function Right_aside() {


    return <div className={ra.right_aside}>

        <Link href="https://liart.ru/ru/pages/service/01/">
            <h2>Платные услуги РГБИ:</h2>
        </Link>

        <ul>

            <li class="transit02">
                <a target="_blank" title="Заказ копирования фрагментов изданий из основного фонда РГБИ" href="http://copy.liart.ru/" class="transit02">
                    Копирование
                </a>
            </li>

            <li class="transit02">
                <a target="_blank" title="Заказ на подбор тематических списков" href="http://thematic.liart.ru/" class="transit02">
                    Тематические списки
                </a>
            </li>

            {/* <li>
                <a target="_blank" title="Оформление читательского билета" href="http://uslugi.liart.ru/">
                    Читательский билет
                </a>
            </li> */}

            <li class="transit02">
                <a target="_blank" title="Оплата услуг РГБИ" href="http://oplata.liart.ru/" class="transit02">
                    Оплата услуг РГБИ
                </a>
            </li>

        </ul>

    </div >
}