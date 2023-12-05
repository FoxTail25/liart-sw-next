import Sw_menu from "../ui/sw_menu";
import h from '../../style/layout/header.module.scss'

export default function Header() {


    return (
        <div className="maxWidth">
            <header className={h.header}>
                <Sw_menu/>
                header
            </header>
        </div>
    )
}