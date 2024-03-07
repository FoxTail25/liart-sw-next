import Layout from '../../../components/layout'
import Head from 'next/head';
import styles from './id.module.scss'


export async function getServerSideProps({ params }) {
    console.log(params);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/new_in_lib/${params.id}`)
    const result = await res.json()
    console.log(result);
    return { props: { result } }
}


export default function NewInLibPage({ result }) {
    console.log(result, 'result');
    return (<>
        {/* <Layout> */}
        <Head>
            <title>РГБИ</title>
        </Head>
        {<div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.image}><img alt='image book' src={`/media/uploads/newinlib/itemavatars/big/${result[0].avatar_img_name}`} /></div>
                {result[0].content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: result[0].content }}></div>}
            </div>
        </div>}
        {/* </Layout> */}
    </>
    )
}