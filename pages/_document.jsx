import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="keywords" content="искусство, библиотека, театр" />
        <meta name="description" content="РГБИ - крупнейшая специальная библиотека по искусству, обладающая ценными собраниями книг, периодических изданий, иконографических материалов." />
        <meta name="DC.Title" lang="ru" content="Российская государственная библиотека искусств" />
        <meta name="DC.Title" lang="en" content="Russian State Arts Library"></meta>
        <meta name="DC.Creator" content="FoxTail25 & LucyIAm" />
        <meta name="DC.Subject" lang="ru" content="Москва; Россия; книги; библиотека; каталог; периодика; рукописи; живопись; литература; искусство" />
        <meta name="DC.Description" lang="ru" content="Информационные ресурсы библиотеки: электронные книги, рукописи, онлайн-каталог" />
        <meta name="DC.Publisher" content="FoxTail25" />
        <meta name="DC.Contributor" content="LucyIAm" />
        <meta name="DC.Date.Issued" content="2023-12-09" />
        <meta name="DC.Type" content="Web page" />
        <meta name="DC.Format" content="text/html" />
        <meta name="DC.Identifier" content="liart.ru" />
        {/* <meta name="DC.Source" content="Источник данных"/> */}
        <meta name="DC.Language" content="ru" />
        <meta name="DC.Coverage" content="Москва" />
        <meta name="DC.Rights" content="(c) РГБИ Москва 1996-2024" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}