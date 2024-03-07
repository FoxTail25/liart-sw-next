import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './useTemplatePageData.module.scss'

export default function useTemplatePage(data, head_title) {
    const [content, setContent] = useState()
    const [title, setTitle] = useState()

    const GET = async () => {
        setTitle(data[0].title)
        let startIndexSlice = data[0].content.indexOf('</p>') + 5
        setContent(data[0].content.slice(startIndexSlice,))
        // console.log(result[0].content.slice(startIndexSlice,));
    }


    const getRendiring = () => {
        return (<>
            {/* <Layout> */}
            <Head>
                <title>{head_title}</title>
            </Head>
            <div className={styles.wrapper}>
                <h1 className={styles.title} >{title}</h1>
                {content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>
            {/* </Layout> */}
        </>)
    }

    return { GET, getRendiring };
}

