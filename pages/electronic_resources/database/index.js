import useTemplateLinkPage from '../../../hooks/templateLinkPage/useTemplateLinkPage'
import Layout from '../../../components/layout'

const dataPage = [
    {
        name: 'БД «Периодические издания»',
        link: '/electronic_resources/database/pagesdb/77'
    },
    {
        name: 'БД «Статьи из журналов и сборников»',
        link: '/electronic_resources/database/pagesdb/80'
    },
    {
        name: 'БД «Газетные статьи»',
        link: '/electronic_resources/database/pagesdb/73'
    },
    {
        name: 'БД «Видеофонд»',
        link: '/electronic_resources/database/pagesdb/76'
    },
    {
        name: 'БД «Изобразительный материал»',
        link: '/electronic_resources/database/pagesdb/74'
    },
    {
        name: 'БД «Драматургия»',
        link: '/electronic_resources/database/pagesdb/79'
    },
    {
        name: 'БД «Конкурс «Действующие лица»',
        link: '/electronic_resources/database/pagesdb/78'
    },
    {
        name: 'БД «Архив справок»',
        link: '/electronic_resources/database/pagesdb/1517'
    },
    {
        name: 'БД «Ресурсы Интернет по искусству»',
        link: '/electronic_resources/database/pagesdb/1388'
    },
    {
        name: 'БД «Книги для каталогизации»',
        link: '/electronic_resources/database/pagesdb/75'
    },
    {
        name: 'БД «Цифровые копии»',
        link: '/electronic_resources/database/pagesdb/1519'
    },
    {
        name: 'БД «Аналитическое описание микрофиш»',
        link: '/electronic_resources/database/pagesdb/1520'
    },
    {
        name: 'БД «Фотоспектакли» ',
        link: '/electronic_resources/database/pagesdb/1521'
    },
    {
        name: 'БД «МАРС» - библиографическая база данных',
        link: '/electronic_resources/database/pagesdb/909'
    },
    {
        name: 'Справочно-правовая система «Консультант+»',
        link: '/electronic_resources/database/pagesdb/1518'
    },
    {
        name: 'ЭБС «Лань»',
        link: '/electronic_resources/database/pagesdb/1522'
    },
    {
        name: 'ЭБС «Университетская библиотека on-line»',
        link: '/electronic_resources/database/pagesdb/1523'
    },
    {
        name: 'Справочная система «Культура»',
        link: '/electronic_resources/database/pagesdb/1524'
    }, {
        name: 'Национальная Электронная Библиотека',
        link: '/electronic_resources/database/pagesdb/1525'
    }, {
        name: 'БД «East View» (ИВИС) ',
        link: '/electronic_resources/database/pagesdb/81'
    }, {
        name: 'Цифровые архивы журналов «Искусство кино», «Русская литература», газет «Советская культура», «Литературная газета»',
        link: '/electronic_resources/database/pagesdb/1526'
    }, {
        name: 'БД «Интегрум»',
        link: '/electronic_resources/database/pagesdb/85'
    }, {
        name: "БД «JSTOR's Archive Collections»",
        link: '/electronic_resources/database/pagesdb/1528'
    },
]

export default function DataBasePage() {
    const templatePage = useTemplateLinkPage(dataPage, 'Базы данных', 'Базы данных')
    return <>
        {templatePage.getRendiring()}
    </>
}