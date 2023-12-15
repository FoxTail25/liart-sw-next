import Header from "./layout/header/header";
import l from './layout.module.scss';
import Right_aside from "./layout/right_aside/right_aside";
import Sw_menu from "./layout/sw_menu/sw_menu";
import Footer from "./layout/footer/footer";


export default function Layout({ children }) {

    return (
        <div className={l.layout}>
            <Sw_menu />
            <Header />

            <div className={`${l.main} max_width flex_row`}>
                <aside className={l.left}>
                    left aside

                </aside>
                <main>
                    {children}
                </main>
                <aside className={l.right}>
                    <Right_aside />
                </aside>

            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}