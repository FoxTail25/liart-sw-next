import { useState } from 'react'
import Head from 'next/head'
import styles from './useTemplatePageArchiveNews.module.scss'

export default function useTemplatePageArchiveNews(url, head_title) {
    const [dataArchive, setDataArchive] = useState()

    const GET = async() => {
        const res = await fetch(url,{
            method: 'GET',
            cache: 'force-cache'
        })
    const result = await res.json()
    setDataArchive(result)
    }


    const getRendiring = ()=> {
        return(<>
        <Head>
            <title>{head_title}</title>
        </Head>
        <div className={styles.about_library}>
            <h1 className={styles.title_page}>{head_title}</h1>
            <ul className={styles.subpages}> 
            {dataArchive && dataArchive.map((data, index) => <li class={styles.subpage} key={index} data-id={data.id}>
                    <span>►</span>
                    {data &&
                    <a href={`/archive_news/id/${data.id}`}>
                        <span>
                            {data.title}    
                        </span>
                    </a>}
                </li>)} 
            </ul>
        </div>
        </>)
    }

     return {GET, getRendiring};
}

