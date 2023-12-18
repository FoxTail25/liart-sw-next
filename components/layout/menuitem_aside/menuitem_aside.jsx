import Link from "next/link";
import mia from './menuitem_aside.module.scss';

export default function Aside_menu_item(item) {

    // console.log(item)

    return <>

        <Link href={item.nameHref[1]} className={mia.menu_item}>
            
            <span className={mia.triangle}>
            </span>

            <span className={mia.content}>
                {item.nameHref[0]}
            </span>
        </Link>

    </>


}