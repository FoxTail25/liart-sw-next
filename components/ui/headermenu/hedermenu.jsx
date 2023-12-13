
import { useState } from 'react'
import MenuItem from '../menuitem/menu_item'
import h from './headrmenu.module.scss'

export default function HeaderMenu() {

    let [mobilMenuOpen, setMobilMenuOpen] = useState(false)

    let menu = [
        {
            nameHref: ["НОВОСТИ", '/'],
            subMenu: null
        },
        {
            nameHref: ["О БИБЛИОТЕКЕ", '/about'],
            subMenu: null
        },
        {
            nameHref: ["УСЛУГИ", '/service'],
            subMenu: null
        },
        {
            nameHref: ["ФОНДЫ", '/fonds'],
            subMenu: null
        },
        {
            nameHref: ["КАТАЛОГИ", '/catalog'],
            subMenu: null
        },
        {
            nameHref: ["ЭЛЕКТРОННЫЕ РЕСУРСЫ", '/elres'],
            subMenu: null
        },
        {
            nameHref: ["КОНТАКТЫ", '/contact'],
            subMenu: 1
        },
    ]

    let menuItem = menu.map((el, ind) => <MenuItem key={ind}{...el} />)



    return (
        <>
            <nav className={h.desktop_menu}>
                {menuItem}
            </nav>
            <div className={h.mobil_menu} onClick={() => setMobilMenuOpen(!mobilMenuOpen)}>
                {mobilMenuOpen && <nav>
                {menuItem}
                </nav>}
               

                <span>МЕНЮ</span>
                <div className={
                    mobilMenuOpen
                        ? `${h.burger_menu} ${h.active}`
                        : h.burger_menu
                }>

                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </>
    )
}