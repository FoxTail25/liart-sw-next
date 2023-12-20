import Sw_menu from '../sw_menu/sw_menu';
import H_links from '../h_links/h_links';
import LogoRGBI from '../h_logo/logo';
import HeaderMenu from '../headermenu/hedermenu';
import h from './header.module.scss';
import Image from 'next/image';

export default function Header() {


    return (
        <>
            <div className={h.container}>

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
            <HeaderMenu />
        </>
    )
}