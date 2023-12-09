import Head from 'next/head'
import '../style/global.css'

export default function App({ Component, pagePrors }) {
    return <>
        <Head>
            <title>Российская государственная библиотека искусств</title>
        </Head>
        <Component {...pagePrors} />
    </>

}