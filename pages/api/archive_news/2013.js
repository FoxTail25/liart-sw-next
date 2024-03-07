import {query} from '../../../getData/db'

export default async function ArchiveNews2014(req, res) {
    if(req.method === "GET"){
        const result = await query({
            query:`SELECT *
            FROM news_archive
            WHERE path_old like '%2013%'`,
            values: []  
        })
        // console.log(result);
        res.json(result)
    }  
}