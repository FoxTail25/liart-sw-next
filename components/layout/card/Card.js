import Link from "next/link"
import styles from './Card.module.scss'

export default function CardDepartmens({icon, title, href, slug, flag}) {
    
    return<div>
        <Link className={styles.card_container} href={`/${slug}/${href}`}>
            <div className={styles.icon}><img src={`/icons/${icon}`}/></div>
            <div className={styles.text_container}>
                <div className={styles.title}>{title}</div>
                {flag ? <div className={styles.goTo}>Подробнее...</div> : ''}
            </div>
        </Link>
    </div>
}