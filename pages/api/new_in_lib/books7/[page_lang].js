import {query} from '../../../../getData/db'


export default async function newInLib(req, res){
  if(req.method === 'GET'){
    const {page_lang} = req.query
    // console.log(page_lang.split('_')[1], Number(page_lang.split('_')[0]  - 1) * 10);
    const new_in_lib = await query({
      query: `SELECT t1.id, t1.item_id, t1.lang, t1.lang, t1.title, t1.content, t2.create_date, t2.publicated, t2.avatar_img_name  
      FROM artlib.newinlib_itemcontent as t1 
      LEFT JOIN artlib.newinlib_item as t2
      ON t1.item_id = t2.id
      WHERE t1.lang= ? and t2.publicated = 1
      ORDER BY t1.id DESC
      LIMIT 10 OFFSET ?;`,
      values: [page_lang.split('_')[1], Number(page_lang.split('_')[0] - 1) * 10]
    })
    const total = await query({
      query: `SELECT count(*) as total
      FROM artlib.newinlib_itemcontent as t1 
      LEFT JOIN artlib.newinlib_item as t2
      ON t1.item_id = t2.id
      WHERE t1.lang= ? and t2.publicated = 1`,
      values: [page_lang.split('_')[1]]
    })
    res.json({new_in_lib: new_in_lib, total: total})
  }

}

