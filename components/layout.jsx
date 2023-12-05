import Header from "./layout/header";

export default function Layout({ children }) {

    return (
        <div className="layout">
            <Header/>
            <div className="main">
                <aside>left aside</aside>
                {children}
                <aside>right aside</aside>
            </div>
            <footer>footer</footer>
        </div>
    )
}