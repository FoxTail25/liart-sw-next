import { useState } from 'react'
import Head from 'next/head'
import styles from './useTemplatePage.module.scss'

export default function useTemplatePage(url, head_title) {
    const [content, setContent] = useState()
    const [title, setTitle] = useState()

    const GET = async() => {
        const res = await fetch(url,{
                method: 'GET',
                cache: 'force-cache'
            })
        const result = await res.json()
        // console.log(result);
        setTitle(result[0].title)
        let startIndexSlice = result[0].content.indexOf('</p>') + 5
        setContent(result[0].content.slice(startIndexSlice,))
        // console.log(result[0].content.slice(startIndexSlice,));
    }


    const getRendiring = ()=> {
        return(<>
        <Head>
            <title>{head_title}</title>
        </Head>
        <div className={styles.wrapper}>
            <h1 className={styles.title} >{title}</h1>
            {content && <div className={styles.content} dangerouslySetInnerHTML={{__html: content}}></div>}
        </div>
        </>)
    }

     return {GET, getRendiring};
}

