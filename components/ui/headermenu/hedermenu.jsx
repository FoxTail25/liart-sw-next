
import { useState } from 'react'
import MenuItem from '../menuitem/menu_item'
import hm from './headrmenu.module.scss'

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
            <nav className={hm.desktop_menu}>
                {menuItem}
            </nav>
            <div className={hm.mobil_menu} onClick={() => setMobilMenuOpen(!mobilMenuOpen)}>
                {mobilMenuOpen && <nav>
                {menuItem}
                </nav>}
               

                <span>МЕНЮ</span>
                <div className={
                    mobilMenuOpen
                        ? `${hm.burger_menu} ${hm.active}`
                        : hm.burger_menu
                }>

                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </>
    )
}