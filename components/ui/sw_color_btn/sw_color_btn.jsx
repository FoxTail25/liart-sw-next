export default function Sw_buttonColor({ colorTheme, setTheme }) {
    return <>
        <button
            style={colorTheme.color ?
                {color:colorTheme.color, background:colorTheme.bg}
                : {}
            }
            title={colorTheme.description}
            onClick={() => setTheme(colorTheme.name)}>
            A
        </button>
    </>
}