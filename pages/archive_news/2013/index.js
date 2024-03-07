import { useEffect } from 'react'
// import useTemplatePageArchiveNews from '@/hooks/templatePageArchiveNews/useTemplatePageArchiveNews'
import useTemplatePageArchiveNews from '../../../hooks/templatePageArchiveNews/useTemplatePageArchiveNews'
// import Layout from '@/components/layout'


export default function PageArchiveNews2013() {
    const templatePage = useTemplatePageArchiveNews(`/api/archive_news/2013`, 'Архив новостей 2013')

    useEffect(() => {
        templatePage.GET()
    }, [])
    return (<>
        {/* <Layout> */}
        {templatePage.getRendiring()}
        {/* </Layout> */}
    </>)
}