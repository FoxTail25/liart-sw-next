import useTemplateLinkPage from '../../hooks/templateLinkPage/useTemplateLinkPage'

const dataPage = [
    {
        name: 'Адрес и время работы РГБИ',
        link: '/about/about_library/16'
    },
    {
        name: 'Запись читателей',
        link: '/about/about_library/18'
    },
    {
        name: 'Общая информация',
        link: '/about/about_library/19'
    },
    {
        name: 'Из истории РГБИ',
        link: '/about/about_library/20'
    },
    {
        name: 'Структура библиотеки',
        link: '/about/departments'
    },
    {
        name: 'Реквизиты библиотеки',
        link: '/about/about_library/22'
    },
    {
        name: 'Нормативные документы',
        link: '/about/regulations'
    },
    {
        name: 'Попечительский совет',
        link: '/about/about_library/'
    },
    {
        name: 'Противодействие коррупции',
        link: '/about/anti_corruption'
    },
    {
        name: '3D панорамы библиотеки',
        link: '/about/3D_panoramas_of_the_library'
    }
]

export default function AboutLibraryPage() {
    const linkPage = useTemplateLinkPage(dataPage, 'О библиотеке', 'О библиотеке')

    return <>
        {linkPage.getRendiring()}
    </>

}