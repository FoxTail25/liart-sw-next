import useTemplatePageData from "../../../../hooks/templatePageData/useTemplatePageData";
import { useEffect } from "react";


export async function getServerSideProps({params}){
    console.log(params, 'params');
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getData/${params.id}`)
    const result = await res.json()
    console.log(result);
    return{
        props: {result}
    }
}

export default function DBPage({result}) {
    console.log(result, 'result');
    const templatePageData = useTemplatePageData(result, result[0].title)
    useEffect(() => {
        templatePageData.GET()
    }, [result])
    return(<>
        {templatePageData.getRendiring()}
        </>
    )
}