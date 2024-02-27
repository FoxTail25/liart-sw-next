import Head from "next/head";
import { useEffect, useState } from "react";
import CardNews from "../components/layout/card_news/CardNews";
import styles from './index.module.scss'


// export async function getServerSideProps() {
//     let repo = 5
//     // Fetch data from external API
//     let res = await fetch('http://localhost:3000/api/hi').then(res => res.json())
//     // console.log(res)
//     // Pass data to the page via props
//     return { props: { repo, res } }
// }

export async function getServerSideProps() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_URL}api/news_query/1_ru`, {
        method: 'GET',
        "Content-Type": "application/json",
    })
    const res = await result.json()
    return { props: { res } }
}



export default function Home({ res }) {

    // console.log('server!? NO it`s client!', repo, res)

    const [news, setNews] = useState()


    useEffect(() => {
        setNews(res.news)
    }, [])

    return <>
        <Head>
            <title>Новости РГБИ</title>
        </Head>
        {/* <p>home</p>
        {
            repo && <>
                <p>{repo}</p>
                <p>{res.message}</p>
            </>
        } */}

        <div className={styles.wrapper} >
            <div className={styles.title}>&nbsp;Новости</div>
            <div className={styles.content}>
                {news && news.map((one, index) => <CardNews
                    key={index}
                    id={one.id}
                    img={one.avatar_img_name}
                    teaser={one.teaser}
                />)}
                <a className={styles.all_news} href='/news/1_ru'> Остальные новости</a>
            </div>
        </div>

    </>
}