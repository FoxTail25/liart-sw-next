export default function Link_block({ title, href, text, visible }) {

    if (visible) {
        return <li>
            <a title={title} href={href}>
            {text}
            </a>
        </li>
    }
}