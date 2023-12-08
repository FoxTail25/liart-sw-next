import Header from "./layout/header/header";

export default function Layout({ children }) {

    return (
        <div className="layout">
            <Header/>
            <div className="main max_width flex_row">
                <aside>left aside</aside>
                {children}
                <aside>right aside</aside>
            </div>
            <footer>footer</footer>
        </div>
    )
}