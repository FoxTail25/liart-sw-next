import aside_left_banner from "../../../data/aside_left_banner";
import aside_left_menu from "../../../data/aside_left_menu";
import BannerLeftAside from "../aside_left_banner/aside_left_banner";
import Calendar from '../calendar/Calendar';
import Aside_menu_item from "../menuitem_aside/menuitem_aside";
import al from './aside_left.module.scss';

export default function Aside_left() {

    let aside_menu = aside_left_menu.map(e => <Aside_menu_item key={e.nameHref[0]} {...e} />)



    let banners = aside_left_banner.map(e => <BannerLeftAside key={e.href} {...e} />)
    // console.log(banners)

    return <div className={al.aside_left}>

        <Calendar />

        <a className={al.month} href='http://official.liart.ru/calendars/month.pdf' target='_blank'>Афиша на месяц</a>

        <nav className={al.aside_nav_menu}>
            {aside_menu}
        </nav>


        {banners}


    </div>
}
