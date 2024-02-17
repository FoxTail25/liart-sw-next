import Head from "next/head";
// import Layout from "../components/layout";


export async function getServerSideProps() {
    let repo = 5
    // Fetch data from external API
    let res = await fetch('http://localhost:3000/api/hi').then(res => res.json())
    // console.log(res)
    // Pass data to the page via props
    return { props: { repo, res } }
}



export default function Home({ repo, res }) {

    // console.log('server!? NO it`s client!', repo, res)


    return <>
        <Head>
            <title>Новости РГБИ</title>
        </Head>
        <p>home</p>
        {
            repo && <>
                <p>{repo}</p>
                <p>{res.message}</p>
            </>
        }

    </>
}