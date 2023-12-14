
const themeArr = [
    {
      name: 'origin',
      color: '',
      bg: '',
      description: 'Оригинальные настройки изображения'
    },
    {
      name: 'white',
      color: 'black',
      bg: 'white',
      description: 'Цветовая схема белый на черном'
    },
    {
      name: 'black',
      color: 'white',
      bg: 'black',
      description: 'Цветовая схема чёрный на белом'
    },
    {
      name: 'blue',
      color: 'rgb(6,52,98)',
      bg: 'rgb(157,209,255)',
      description: 'Цветовая схема синий на голубом'
    },
    {
      name: 'sand',
      color: 'rgb(77,75,67)',
      bg: 'rgb(247,243,214)',
      description: 'Цветовая схема коричневый на жёлтом'
    },
    {
      name: 'green',
      color: 'rgb(169, 228, 77)',
      bg: 'rgb(59, 39, 22)',
      description: 'Цветовая схема зелёный на сером'
    }
  ]

  const themeFontSizeArr = [
    {
      name: 'fontSize',
      property: "18px",
      description: "Размер шрифта 18рх",
      
    },
    {
      name: 'fontSize',
      property: "24px",
      description: "Размер шрифта 24рх",
      
    },
    {
      name: 'fontSize',
      property: "30px",
      description: "Размер шрифта 30рх",
      
    }
  ]

  const themeLetterSpasingArr = [
    {
      name: 'letterSpacing',
      property: "1px",
      description: "Расстояние между буквами 1рх",
      
    },
    {
      name: 'letterSpacing',
      property: "3px",
      description: "Расстояние между буквами 3рх",
      
    },
    {
      name: 'letterSpacing',
      property: "5px",
      description: "Расстояние между буквами 5рх",
      
    }
  ]
  
  const themeImageArr = [
    {
      name: 'background-image',
      property: 'url("/header/sw_menu/img_off.svg")',
      description: "скрыть изображения",
    },
    {
      name: 'background-image',
      property: 'url("/header/sw_menu/img_on.svg")',
      description: "включить изображения",
    }
  ]

  export {themeArr, themeFontSizeArr, themeLetterSpasingArr};