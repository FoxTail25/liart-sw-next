// import {query} from '@/getData/db'
import { query } from '../../../getData/db.js'

export default async function getServices(req, res) {
    if (req.method == "GET") {
        const services = await query({
            //template for mysql
            // query: `SELECT *
            // FROM pages_content
            // WHERE title=?`,
            // values: ['Услуги']
            query: `SELECT *
            FROM pages_content
            WHERE title='Услуги'`,
            values: []
        })
        res.json(services)
    }
}