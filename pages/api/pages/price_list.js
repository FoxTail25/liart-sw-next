// import {query} from '@/getData/db'
import { query } from '../../../getData/db.js'

export default async function getPriceList(req, res) {
    if (req.method == "GET") {
        const priceList = await query({
            //template for mysql
            // query:`SELECT *
            // FROM pages_content
            // WHERE  title=?`,
            // values: ['Прейскурант платных услуг']
            query: `SELECT *
        FROM pages_content
        WHERE  title='Прейскурант платных услуг'`,
            values: []
        })
        res.json(priceList)
    }
}