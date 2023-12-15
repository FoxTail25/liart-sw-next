import Link from "next/link";
import ra from './right_aside.module.scss'
import Link_block from "../../ui/link_block/link_block";
import paidService from "../../../data/link_block_paid_services";
import newBook from "../../../data/link_block_new_book";
import Image from "next/image";

export default function Right_aside() {





    return <div className={ra.right_aside}>


        <Link href="https://liart.ru/ru/pages/service/01/">
            <h2>Платные услуги РГБИ:</h2>
        </Link>

        <ul>
            {paidService.map(e => <Link_block key={e.text} {...e} />)}
        </ul>

        <Link href="/ru/newinlib/" >
            <h2>Из новых поступлений:</h2>
        </Link>
        <ul>
            {newBook.map(e => <Link_block key={e.text} {...e} />)}
        </ul>

        <Image 
        src='/aside/Vibor_Bibl.jpg' 
        quality={75}
        width={224} 
        height={190}
        alt="выбор библиотекаря"
        priority={true}
        />

    </div >
}