import Header from "./layout/header/header";
import l from './layout.module.scss';
import Right_aside from "./layout/aside_right/right_aside";
import Sw_menu from "./layout/sw_menu/sw_menu";
import Footer from "./layout/footer/footer";
import Aside_left from "./layout/aside_left/aside_left";
import Head from "next/head";
// import localFont from 'next/font/local';

// const ptSerif_regular = localFont({
//     src: '../fonts/PTSerif-Regular.ttf',
//     display: 'swap',
// })


export default function Layout({ children }) {

    return <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <div className={`${l.layout}  ${ptSerif_regular.className}`}> */}
        <div className={l.layout}>
            <Sw_menu />
            <Header />

            <div className={`${l.main} max_width flex_row`}>
                <aside className={l.left}>
                    {/* left aside */}
                    <Aside_left />

                </aside>
                <main>
                    {children}
                </main>
                <aside className={l.right}>
                    <Right_aside />
                </aside>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    </>
}