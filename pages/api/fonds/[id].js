import { query } from '../../../getData/db'

export default async function getFunds(req, res) {
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