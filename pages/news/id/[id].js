
import Layout from '../../../components/layout';
import styles from './id.module.scss'

export async function getServerSideProps({ params }) {
  // console.log(params);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/news_query/id/${params.id}`)
  const data = await res.json()
  // console.log(data);
  return {
    props: { data }
  }
}

export default function OneNewsPage({ data }) {
  // console.log(data, 'page')
  return (<>
    {/* <Layout> */}
    <div className={styles.wrapper}>
      <h1 className={styles.title} >{data[0].title}</h1>
      {data[0].content && <div className={styles.content} dangerouslySetInnerHTML={{ __html: data[0].content.slice(data[0].content.indexOf('</p>') + 5) }}></div>}
    </div>
    {/* </Layout> */}
  </>
  )
}