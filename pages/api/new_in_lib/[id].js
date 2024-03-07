import { query } from '../../../getData/db'

export default async function getIdBook(req, res) {
    const { id } = req.query
    // console.log(id, 'id');
    const result = await query({
        query: `SELECT *
        FROM newinlib_itemcontent as t1 LEFT JOIN newinlib_item as t2
        on t1.item_id = t2.id
        WHERE t1.id = ?`,
        values: [id]
    })
    // console.log(result);
    // const paht_image = await query({
    //     query:`SELECT id, create_date, publicated, avatar_img_name, main FROM newinlib_item WHERE id=${result[0].item_id}`,
    //     values: []
    // })
    // result[0].getId = id
    // console.log(result);
    res.json(result)
}