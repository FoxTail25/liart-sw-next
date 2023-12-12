import Header from "./layout/header/header";
import l from './layout.module.scss';

export default function Layout({ children }) {

    return (
        <div className={l.layout}>

            <Header />

            <div className={`${l.main} max_width flex_row`}>
                <aside className={l.left}>
                    left aside
                </aside>
                <main>
                    {children}
                </main>
                <aside className={l.right}>
                    right aside
                </aside>

            </div>
            <footer>footer</footer>
        </div>
    )
}