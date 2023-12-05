import useTheme from "../../hooks/useTheme"

export default function Sw_menu() {
    const [theme, setTheme] = useTheme()

    const themeArr = ['origin', 'white', 'black', 'blue', 'sand', 'green']

    const themeBtn = () => {
        return themeArr.map(e => 
        <button key={e} onClick={()=>setTheme(e)}>{e}</button>
        )
    }

    return <div>
      {themeBtn()}
    </div>
}