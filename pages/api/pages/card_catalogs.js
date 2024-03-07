// import {query} from '@/getData/db'
import { query } from '../../../getData/db.js'

export default async function getCardCatalogs(req, res) {
    if (req.method == "GET") {
        const result = await query({
            query: `SELECT *
            FROM pages_content
            WHERE title='Карточные каталоги'`
        })
        res.json(result)
    }
}