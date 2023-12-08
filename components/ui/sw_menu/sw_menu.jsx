import useTheme from "../../../hooks/useTheme"
import useThemeFonts from "../../../hooks/useThemeFonts"
import useThemeLs from "../../../hooks/useThemeLs"
import sw from './sw_menu.module.scss'
import Sw_buttonColor from "../sw_color_btn/sw_color_btn"
import Sw_font_btn from "../sw_font_btn/sw_font_btn"

export default function Sw_menu() {
  const [theme, setTheme] = useTheme()
  const [themeFonts, setThemeFonts] = useThemeFonts()
  const [themeLetterSpasing, setThemeLetterSpasing] = useThemeLs()

  function getOriginTheme() {
    setTheme('origin')
    setThemeFonts('origin')
    setThemeLetterSpasing('origin')
  }

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

  const themeFontSizeArr = [
    {
      name: 'fontSize',
      property: "18px",
      description: "Размер шрифта 18рх",
      func: setThemeFonts
    },
    {
      name: 'fontSize',
      property: "24px",
      description: "Размер шрифта 24рх",
      func: setThemeFonts
    },
    {
      name: 'fontSize',
      property: "30px",
      description: "Размер шрифта 30рх",
      func: setThemeFonts
    }
  ]

  const themeLetterSpasingArr =[
    {
      name: 'letterSpacing',
      property: "1px",
      description: "Расстояние между буквами 1рх",
      func: setThemeLetterSpasing
    },
    {
      name: 'letterSpacing',
      property: "3px",
      description: "Расстояние между буквами 3рх",
      func: setThemeLetterSpasing
    },
    {
      name: 'letterSpacing',
      property: "5px",
      description: "Расстояние между буквами 5рх",
      func: setThemeLetterSpasing
    }
  ]

  const colorThemeBtn = () => <div className={sw.btn_block}>
    {
      themeArr.filter(e => e.name != 'origin').map(colorTheme =>
        < Sw_buttonColor key={colorTheme.name}{...{
          colorTheme,
          setTheme
        }} />
      )
    }
  </div>

    const getFontSizeBtn = (arr, text) =>
      arr.map( e => <Sw_font_btn key={e.property} {...{...e, ...{content:text}}}/>)
    

  return <nav className={sw.sw_menu}>
    <div className={sw.btn_block}>
      {getFontSizeBtn(themeLetterSpasingArr, 'АБВ')}
    </div>

    <div className={sw.btn_block}>
      {getFontSizeBtn(themeFontSizeArr, 'A')}
      
    </div>
    {colorThemeBtn()}
    <div className={sw.btn_block}>
      <button onClick={getOriginTheme}>Origin</button>
    </div>
  </nav>
}