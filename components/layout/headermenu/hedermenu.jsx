
import { useEffect, useState } from 'react';
import MenuItem from '../menuitem/menu_item';
import hm from './headrmenu.module.scss';
import Sw_logo from '../sw_logo/sw_logo';
import header_menu from '../../../data/header_menu';
import aside_left_menu from '../../../data/aside_left_menu';

export default function HeaderMenu() {

    let [mobilMenuOpen, setMobilMenuOpen] = useState(false)
    let [asideMenuOpen, setAsideMenuOpen] = useState(false)



    let header_menuItem = header_menu.map((el, ind) => <MenuItem key={ind}{...el} />)
    let aside_left_menuItem = aside_left_menu.map((el, ind) => <MenuItem key={ind}{...el} />)



    return (
        <div className={hm.header_menu}>


            <nav className={hm.desktop_menu}>
                {header_menuItem}
            </nav>

            <div className={hm.mobil_leftAside_menu} onClick={() => {setAsideMenuOpen(!asideMenuOpen), setMobilMenuOpen(false)}}>


                {
                    asideMenuOpen &&
                    <nav>
                        {aside_left_menuItem}
                    </nav>
                }

                <div className={
                    asideMenuOpen
                        ? `${hm.burger_menu} ${hm.active}`
                        : hm.burger_menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <span>
                    ASIDE
                </span>
            </div>

            <div className={hm.sw_menu}>
                <Sw_logo />
            </div>

            <div className={hm.mobil_menu} onClick={() => {setMobilMenuOpen(!mobilMenuOpen), setAsideMenuOpen(false)}}>
                {
                    mobilMenuOpen &&
                    <nav>
                        {header_menuItem}
                    </nav>
                }


                <span>МЕНЮ</span>
                <div className={
                    mobilMenuOpen
                        ? `${hm.burger_menu} ${hm.active}`
                        : hm.burger_menu
                }>

                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    )
}