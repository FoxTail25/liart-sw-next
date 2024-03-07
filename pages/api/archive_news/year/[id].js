import {query} from '../../../../getData/db'

export default async function GetDataArchiveNewsFromId(req, res) {
    if(req.method === "GET"){
        const id = req.query.id
        const result = await query({
            query: `SELECT *
            FROM news_archive
            WHERE id=?`,
            values:[id]
        })
        // console.log(result);
        res.json(result)
    }
}