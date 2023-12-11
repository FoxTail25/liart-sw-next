import Link from "next/link";

export default function MenuItem({ nameHref, subMenu }) {
    let [name, href] = nameHref

    return (
        <Link href={href}>
            <span>
                {name}
            </span>
        </Link>
    )
}