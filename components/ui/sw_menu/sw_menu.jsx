import useTheme from "../../../hooks/useTheme"
import useThemeFonts from "../../../hooks/useThemeFonts"
import useThemeLs from "../../../hooks/useThemeLs"
import sw from './sw_menu.module.scss'
import Sw_buttonColor from "../sw_color_btn/sw_color_btn"
import Sw_font_btn from "../sw_font_btn/sw_font_btn"
import { useContext } from "react"
import myContext from "../../../store/myContext"
import { themeArr, themeFontSizeArr, themeLetterSpasingArr } from "../../../data/themeData"

export default function Sw_menu() {
  const [theme, setTheme] = useTheme()
  const [themeFonts, setThemeFonts] = useThemeFonts()
  const [themeLetterSpasing, setThemeLetterSpasing] = useThemeLs()

  function getOriginTheme() {
    setTheme('origin')
    setThemeFonts('origin')
    setThemeLetterSpasing('origin')
  }

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

  const getFontSizeBtn = (arr, text, setfunc) =>
    arr.map(e => <Sw_font_btn key={e.property} {...{ ...e, ...{ content: text, func: setfunc} }} />)

  const context = useContext(myContext).sw_menu.sw_menu_vision

  return <nav className={[context ? sw.sw_menu : sw.off]} 
  suppressHydrationWarning
  >

    {
      context && <>
        <div className={sw.btn_block} suppressHydrationWarning>
          {getFontSizeBtn(themeFontSizeArr, 'A', setThemeFonts)}
        </div>

        <div className={sw.btn_block} suppressHydrationWarning>
          {getFontSizeBtn(themeLetterSpasingArr, 'АБВ', setThemeLetterSpasing)}

        </div>
        {colorThemeBtn()}
        <div className={sw.btn_block} suppressHydrationWarning>
          <button onClick={getOriginTheme} title="Цветовая схема по умолчанию">Origin</button>
        </div>
      </>

    }
  </nav>
}