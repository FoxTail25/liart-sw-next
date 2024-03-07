import { query } from '../../../getData/db'

export default async function getdb(req, res) {
    const { id } = req.query
    // console.log(id, 'id');
    const result = await query({
        query: `SELECT *
        FROM pages_content
        WHERE id=?`,
        values: [id]
    })
    res.json(result)
}