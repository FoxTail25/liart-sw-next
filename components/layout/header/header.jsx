import Sw_menu from '../../ui/sw_menu/sw_menu'
import h from './header.module.scss'

export default function Header() {


    return (
        <div className={h.container}>
                <Sw_menu/>
            <header className={`${h.header} max_width`}>
                header
            </header>
        </div>
    )
}