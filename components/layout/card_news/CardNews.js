import Link from "next/link"
import styles from './CardNews.module.scss'
import { useEffect, useState } from "react"



const CardNews = ({ id, img, teaser }) => {
  const [flag, setFlag] = useState()

  useEffect(() => {
    let url = window.location.href
    if (url.includes('new_in_lib')) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [])

  return (<>
    {!flag && <Link href={`/news/id/${id}`} className={styles.box}>
      <img className={styles.avatar_img} alt="teaser" src={`https://liart.ru/media/uploads/newsavatars/${img}`} />
      <div className={styles.teaser}>
        <div className={styles.teaser_news}>{teaser.length > 70 ? `${teaser.slice(0, 60)}...` : teaser}</div>
        <div className={styles.goTo} >Подробнее...</div>
      </div>
    </Link>}
    {flag && <Link href={`/new_in_lib/getId/${id}`} className={styles.box}>
      <img className={styles.img_cover} alt="teaser" src={`https://liart.ru/media/uploads/newinlib/itemavatars/${img}`} />
      <div className={styles.teaser}>
        <div className={styles.teaser_news}>{teaser}</div>
        <div className={styles.goTo} >Подробнее...</div>
      </div>
    </Link>}
  </>
  )

}

export default CardNews