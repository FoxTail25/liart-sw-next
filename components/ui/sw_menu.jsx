import useTheme from "../../hooks/useTheme"
import useThemeFonts from "../../hooks/useThemeFonts"
import useThemeLs from "../../hooks/useThemeLs"
import sw from '../../style/layout/sw_menu.module.scss'
import Sw_buttonColor from "./sw_button_color"

export default function Sw_menu() {
  const [theme, setTheme] = useTheme()
  const [themeFonts, setThemeFonts] = useThemeFonts()
  const [themeLetterSpasing, setThemeLetterSpasing] = useThemeLs()

  const themeArr = [
    {
      name: 'origin',
      color: '',
      bg: '',
    },
    {
      name: 'white',
      color: 'black',
      bg: 'white',
    },
    {
      name: 'black',
      color: 'white',
      bg: 'black',
    },
    {
      name: 'blue',
      color: 'rgb(6,52,98)',
      bg: 'rgb(157,209,255)',
    },
    {
      name: 'sand',
      color: 'rgb(77,75,67)',
      bg: 'rgb(247,243,214)',
    },
    {
      name: 'green',
      color: 'rgb(169, 228, 77)',
      bg: 'rgb(59, 39, 22)',
    }
  ]

  

  const themeBtn = () => {
    return themeArr.map(colorTheme => {
      return < Sw_buttonColor key={colorTheme.name}{...{
        colorTheme,
        setTheme
      }} />
    }
    )
  }

  return <nav className={sw.sw_menu}>
    <button onClick={()=> setThemeLetterSpasing('origin')}>A</button>
    <button onClick={()=> setThemeLetterSpasing('1px')}>Abc</button>
    <button onClick={()=> setThemeLetterSpasing('3px')}>Abc</button>
    <button onClick={()=> setThemeLetterSpasing('5px')}>Abc</button>

    <button onClick={()=> setThemeFonts('origin')}>A</button>
    <button onClick={()=> setThemeFonts('18px')}>A18</button>
    <button onClick={()=> setThemeFonts('24px')}>A24</button>
    <button onClick={()=> setThemeFonts('30px')}>A30</button>
    {themeBtn()}
  </nav>
}