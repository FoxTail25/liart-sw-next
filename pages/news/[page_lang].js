import { useState, useEffect, useContext } from 'react';
import AppContext from '../../store/myContext';
import CardNews from '../../components/layout/card_news/CardNews'
import Pagination from '../../components/layout/pagination/Pagination';
import Layout from '../../components/layout';
import styles from './index.module.scss'

export async function getServerSideProps({ params }) {
  // console.log(params);
  const result = await fetch(`${process.env.NEXT_PUBLIC_URL}api/news_query/${params.page_lang}`, {
    method: 'GET',
    "Content-Type": "application/json",
  })
  const res = await result.json()
  return { props: { res } }
}

export default function News({ res }) {

  const [news, setNews] = useState([])
  let [totalNews, setTotalNews] = useState()
  let [quantityPage, setQuantityPage] = useState([])
  const context = useContext(AppContext)
  let addTo10, startOn, endTo, strCount
  let pages = []


  useEffect(() => {
    context.startCount.setStartCount(Number(window.location.href.split('/')[window.location.href.split('/').length - 1].split('_')[0]))
  }, [])

  useEffect(() => {
    setNews(res.news)
    setTotalNews(res.total[0].total)
    // console.log('++++');
    let getHref = window.location.href.split('/')[window.location.href.split('/').length - 1]
    strCount = getHref.split('_')[0]
    // console.log(strCount, 'strCount');
    // context.startCount.setStartCount(Number(strCount))

    if (strCount.length > 1) {
      // console.log('yes');
      let digitLast = strCount[strCount.length - 1]
      // console.log(digitLast);
      addTo10 = 10 - Number(digitLast)
      // console.log('addTo 10', addTo10);
      startOn = Number(strCount) - Number(digitLast)
      // console.log(startOn + 10, totalNews / 10, totalNews);
      if (startOn + 10 >= Math.ceil(totalNews / 10) && startOn + 10) {
        // console.log('yes');
        endTo = Math.ceil(totalNews / 10)
      } else {
        // console.log('no');
        endTo = startOn + 10
      }
    } else {
      startOn = 1
      // console.log('page', strCount, 'StartOn', startOn);
      endTo = 10
      // console.log(endTo, 'endTO');
    }
    // console.log(startOn, 'startOn', endTo, 'endTO');
    let count = startOn
    while (endTo >= count) {
      pages.push(count)
      count += 1
    }
    setQuantityPage(pages)
  }, [context.lang.lang, context.number_page.numberPage, context.startCount.startCount])

  function goPrevious(event) {
    event.preventDefault()
    if (context.startCount.startCount > 10) {
      // context.startCount.setStartCount(context.startCount.startCount - 10)
      window.location.href = `${process.env.NEXT_PUBLIC_URL}news/${context.startCount.startCount - 10}_ru`
    }
  }
  function goNext(event) {
    event.preventDefault()
    if (context.startCount.startCount <= (totalNews / 10) && quantityPage[quantityPage.length - 1] <= (totalNews / 10)) {
      window.location.href = `${process.env.NEXT_PUBLIC_URL}news/${context.startCount.startCount + 10}_ru`
    } else {
      return (null)
    }
  }

  // console.log(context.startCount.startCount, 'context.startCount.startCount', quantityPage, 'quantityPage');
  // console.log(totalNews);
  return <>
    {/* <Layout> */}
    {/* {console.log(news)} */}
    <div className={styles.wrapper} >
      <div className={styles.title}>&nbsp;Новости</div>
      <div className={styles.content}>
        {news.length >= 1 && news.map((one, index) => <CardNews
          key={index}
          id={one.id}
          img={one.avatar_img_name}
          teaser={one.teaser}
        />)}

        {quantityPage.length !== 0 &&
          <div className={styles.wrapper_pagination}>
            <div className={styles.previous} onClick={goPrevious}></div>
            {quantityPage.map((number, index) => <Pagination
              key={index}
              num={number}
            />
            )}
            <div className={styles.next} onClick={goNext}></div>
          </div>
        }
      </div>
    </div>
    {/* </Layout> */}
  </>
}
