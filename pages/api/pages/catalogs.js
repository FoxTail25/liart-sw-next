// import {query} from '@/getData/db'
import { query } from '../../../getData/db.js'

export default async function getCatalogs(req, res) {
    if (req.method == "GET") {
        const result = await query({
            query: `SELECT *
            FROM pages_content
            WHERE title='Каталоги'`
        })
        res.json(result)
    }
}