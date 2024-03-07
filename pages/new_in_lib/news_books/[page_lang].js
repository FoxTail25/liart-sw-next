import { useState, useEffect, useContext } from 'react';
import AppContext from '../../../store/myContext';
import CardNews from '../../../components/layout/card_news/CardNews'
import Pagination from '../../../components/layout/pagination/Pagination';
import Layout from '../../../components/layout';
import styles from './page_lang.module.scss'


export async function getServerSideProps({ params }) {
  // console.log(params);
  const result = await fetch(`${process.env.NEXT_PUBLIC_URL}api/new_in_lib/books7/${params.page_lang}`, {
    method: 'GET',
    "Content-Type": "application/json",
  })
  const res = await result.json()
  return { props: { res } }
}
export default function News({ res }) {

  const [books, setBooks] = useState([])
  const [quantityPage, setQuantityPage] = useState([])
  let [total, setTotal] = useState()
  const context = useContext(AppContext)
  let addTo10, strCount, startOn, endTo
  let pages = []


  useEffect(() => {
    context.startCount.setStartCount(Number(window.location.href.split('/')[window.location.href.split('/').length - 1].split('_')[0]))
  }, [])

  useEffect(() => {
    setBooks(res.new_in_lib)
    setTotal(res.total[0].total)
    let getHref = window.location.href.split('/')[window.location.href.split('/').length - 1]
    strCount = getHref.split('_')[0]

    if (strCount.length > 1) {
      let digitLast = strCount[strCount.length - 1]
      addTo10 = 10 - Number(digitLast)
      startOn = Number(strCount) - Number(digitLast)
      if (startOn + 10 >= Math.ceil(total / 10)) {
        endTo = Math.ceil(total / 10)
      } else {
        endTo = startOn + 10
      }
    } else {
      startOn = 1
      endTo = 10
    }
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
      window.location.href = `${process.env.NEXT_PUBLIC_URL}new_in_lib/news_books/${context.startCount.startCount - 10}_ru`
    }
  }
  function goNext(event) {
    event.preventDefault()
    if (context.startCount.startCount <= (total / 10) && quantityPage[quantityPage.length - 1] <= (total / 10)) {
      window.location.href = `${process.env.NEXT_PUBLIC_URL}new_in_lib/news_books/${context.startCount.startCount + 10}_ru`
    }
  }

  return <>
    {/* <Layout> */}
    <div className={styles.wrapper} >
      <div className={styles.title}> Из новых поступлений</div>
      <div className={styles.content}>
        {books.length >= 1 && books.map((one, index) => <CardNews
          key={index}
          id={one.id}
          img={one.avatar_img_name}
          teaser={one.title}
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
