import useTheme from "../../hooks/useTheme"
import useThemeFonts from "../../hooks/useThemeFonts"
import useThemeLs from "../../hooks/useThemeLs"
import sw from '../../style/layout/sw_menu.module.scss'
import Sw_buttonColor from "./sw_color_btn"
import Sw_font_btn from "./sw_font_btn"

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

  const themeFontArr = [
    {
      fontSize: {
        small: {
          property: "18px"
        },
        medium: {
          property: "24px"
        },
        large: {
          property: "30px"
        }
      },

      lettrtSpasing: {
        small: {
          property: "1px"
        },
        medium: {
          property: "3px"
        },
        large: {
          property: "5px"
        }

      }
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


  // const fontThemeBtn = () =>
  //   themeFontArr.map((e, i) => e.hasOwnProperty('fontSize')
  //     ? <div key={i} className={sw.btn_block}>
  //       {/* {() => {
  //         for (let s in e) {
  //           console.log(s);
  //           <Sw_font_btn key={e.property}{...{ name: 'fontSize', e, setThemeFonts }} />
  //         }
  //       }} */}
  //       да
  //     </div>
  //     : <div key={i} className={sw.btn_block}>
  //       {/* {() => {
  //         for (let s in e) {
  //           console.log(s);
  //           <Sw_font_btn {...{ name: 'fontSize', e, setThemeLetterSpasing }} />
  //         }
  //       }} */}
  //       нет
  //     </div>
  //   )




  return <nav className={sw.sw_menu}>
    <div className={sw.btn_block}>
      <button onClick={() => setThemeLetterSpasing('1px')}>Abc</button>
      <button onClick={() => setThemeLetterSpasing('3px')}>Abc</button>
      <button onClick={() => setThemeLetterSpasing('5px')}>Abc</button>
    </div>

    <div className={sw.btn_block}>
      <button onClick={() => setThemeFonts('18px')}>A18</button>
      <button onClick={() => setThemeFonts('24px')}>A24</button>
      <button onClick={() => setThemeFonts('30px')}>A30</button>
    </div>
    {/* {fontThemeBtn()} */}
    {colorThemeBtn()}
    <div className={sw.btn_block}>
      <button onClick={getOriginTheme}>Origin</button>
    </div>
  </nav>
}