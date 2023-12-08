export default function Sw_font_btn(props) {

    const { name, property, description, func, content } = props

    // console.log(name, property, description, func, content)
    let s = { [name]: property }

    function changeFont() {
        func(property)
    }

    return <button
        style={s}
        title={props.description}
        onClick={changeFont}>
        {content}
    </button>
}