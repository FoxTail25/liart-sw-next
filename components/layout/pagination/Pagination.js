import styles from './Pagination.module.scss'
import { useContext } from 'react'
import AppContext from '../../../store/myContext'


export default function Pagination({num}) {
    const context = useContext(AppContext)


    function getPage(e){
        e.preventDefault()
        if(window.location.href.includes('new_in_lib')){
            window.location.href = `${process.env.NEXT_PUBLIC_URL}new_in_lib/news_books/${num}_ru`
            context.number_page.setNumberPage(num)  
        }else{
            window.location.href = `${process.env.NEXT_PUBLIC_URL}news/${num}_ru`
            context.number_page.setNumberPage(num)
        }
        
    }
    return(
        <div className={num === Number(window.location.href.split('/')[window.location.href.split('/').length -  1].split('_')[0]) ? styles.change : styles.box_num} onClick = {getPage} >{num}</div> 
    )
}