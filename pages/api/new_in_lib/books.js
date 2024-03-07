import { query } from '../../../getData/db'

export default async function allNews(req, res) {

  if (req.method === 'GET') {
    const result = await query({
      query: `SELECT *
        FROM newinlib_itemcontent as t1 LEFT JOIN newinlib_item as t2
        on t1.item_id = t2.id`,
      values: []
    })
    // console.log(result, 'result new');
    res.json(result)
  }

}
