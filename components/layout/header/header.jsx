import Sw_menu from '../../ui/sw_menu/sw_menu'
import LogoRGBI from '../logo/logo'
import h from './header.module.scss'

export default function Header() {


    return (
        <div className={h.container}>
            <Sw_menu />
            <header className={`${h.header} max_width`}>
                {/* <div className='logo'></div> */}
                <LogoRGBI />
                <div className={h.content}>
                    <h5>Федеральное государственное бюджетное учреждение культуры</h5>
                    <h2>РОССИЙСКАЯ ГОСУДАРСТВЕННАЯ <br/>БИБЛИОТЕКА ИСКУССТВ</h2>
                    <p>"Искусство помогать искусству"</p>
                </div>
                <div className='links'></div>
            </header>
        </div>
    )
}