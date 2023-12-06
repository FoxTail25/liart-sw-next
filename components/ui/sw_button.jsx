export default function Sw_button({ colorTheme, setTheme }) {
    return <>
        <button
            
            style={colorTheme.color ?
                {color:colorTheme.color, background:colorTheme.bg}
                : {}
            }
            onClick={() => setTheme(colorTheme.name)}>
            A
        </button>
    </>
}