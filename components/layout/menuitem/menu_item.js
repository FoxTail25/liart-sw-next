import Link from "next/link";
import mi from './menu_item.module.scss';

export default function MenuItem({ nameHref, subMenu }) {
    let [name, href] = nameHref

    return (
        <Link href={href} className={mi.menu_item}>
            <span className={mi.dropdown}>
                {name}
            </span>
        </Link>
    )
}