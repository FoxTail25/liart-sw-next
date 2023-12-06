import Sw_menu from "../ui/sw_menu";
import h from '../../style/layout/header.module.scss'

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