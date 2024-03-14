// import Layout from '../../components/layout'
import useTemplateLinkPage from '../../hooks/templateLinkPage/useTemplateLinkPage'

const dataPage = [
    {
        name: 'Архив новостей 2014',
        link: '/archive_news/2014'
    },
    {
        name: 'Архив новостей 2013',
        link: '/archive_news/2013'
    },
    {
        name: 'Архив новостей 2012',
        link: '/archive_news/2012'
    },
    {
        name: 'Архив новостей 2011',
        link: '/archive_news/2011'
    },
    {
        name: 'Архив новостей 2010',
        link: '/archive_news/2010'
    },
    {
        name: 'Архив новостей 2009',
        link: '/archive_news/2009'
    },
    {
        name: 'Архив новостей 2008',
        link: '/archive_news/2008'
    },
    {
        name: 'Архив новостей 2007',
        link: '/archive_news/2007'
    },
    {
        name: 'Архив новостей 2006',
        link: '/archive_news/2006'
    },
]


export default function ArchiveNewsPages() {
    const pageTemplateLink = useTemplateLinkPage(dataPage, 'Архив новостей', 'Архив новостей')
    return <>
        {pageTemplateLink.getRendiring()}
    </>
}