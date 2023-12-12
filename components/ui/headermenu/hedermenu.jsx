
import MenuItem from '../menuitem/menu_item'
import h from './headrmenu.module.scss'

export default function HeaderMenu() {

    let menu = [
        {
            nameHref: ["НОВОСТИ",'/'],
            subMenu: null
        },
        {
            nameHref: ["О БИБЛИОТЕКЕ",'/about'],
            subMenu: null
        },
        {
            nameHref: ["УСЛУГИ",'/service'],
            subMenu: null
        },
        {
            nameHref: ["ФОНДЫ",'/fonds'],
            subMenu: null
        },
        {
            nameHref: ["КАТАЛОГИ",'/catalog'],
            subMenu: null
        },
        {
            nameHref: ["ЭЛЕКТРОННЫЕ РЕСУРСЫ",'/elres'],
            subMenu: null
        },
        {
            nameHref: ["КОНТАКТЫ", '/contact'],
            subMenu: 1
        },
    ]

    let menuItem = menu.map( (el, ind) => <MenuItem key={ind}{...el}/>)

    let mobilMenuItem = () => {
        return <p> mobil menu </p>
    }

    return (
        <>
        <nav className={h.desktop_nav}>
            {menuItem}
        </nav>
        <nav className={h.mobil_nav}>
            {mobilMenuItem()}
        </nav>
        </>
    )
}