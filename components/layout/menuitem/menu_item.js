import Link from "next/link";
import mi from './menu_item.module.scss';

export default function MenuItem({ nameHref, subMenu, ...props }) {
    let [name, href] = nameHref

    const submenuArr = [];

    // console.log(props)

    if (subMenu) {

        subMenu.map((e) => {
            submenuArr.push(<div key={e.name} ><Link href={e.href}>{e.name}</Link></div>)
        })
    }

    return (
        <div className={mi.menu_item}>
            <Link href={href} className={mi.drop_btn}>
                {name}
            </Link>
            {(subMenu && props.desktop) &&

                <div className={mi.drop_content}>

                    {submenuArr}


                </div>
            }
        </div>
    )
}