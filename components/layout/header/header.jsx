import HeaderMenu from '../../ui/headermenu/hedermenu'
import Sw_menu from '../../ui/sw_menu/sw_menu'
import H_links from '../h_links/h_links'
import LogoRGBI from '../h_logo/logo'
import h from './header.module.scss'

export default function Header() {


    return (
        <>
            <div className={h.container}>
                <Sw_menu />
                <header className={`${h.header} max_width`}>

                    <div className={h.logoRGBI}>
                        <LogoRGBI />
                    </div>

                    <div className={h.content}>
                        <h5>Федеральное государственное бюджетное учреждение культуры</h5>
                        <h2>РОССИЙСКАЯ ГОСУДАРСТВЕННАЯ <br />БИБЛИОТЕКА ИСКУССТВ</h2>
                        <p>"Искусство помогать искусству"</p>
                    </div>

                    <div className={h.header_links}>
                        <H_links />
                    </div>

                </header>
            </div>
            <HeaderMenu/>
        </>
    )
}