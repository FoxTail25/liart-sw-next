import Head from "next/head";
import { useState, useEffect } from 'react'
// import Layout from "@/components/layout";
import styles from './id.module.scss'

export async function getServerSideProps({ params }) {
    // console.log(params);
    const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/archive_news/year/${params.id}`, {
        method: 'GET',
        cache: 'no-cache'
    })
    const data_archive = await result.json()
    return {
        props: { data_archive }
    }
}

export default function GetOneArchiveNews({ data_archive }) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    } else {
        return (<>
            <Head>
                <title>{data_archive[0].title}</title>
            </Head>
            {/* <Layout> */}
            <div className={styles.wrapper}>
                <h1 className={styles.title} >{data_archive[0].title}</h1>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: data_archive[0].content }}></div>
            </div>
            {/* </Layout> */}
        </>)
    }
}