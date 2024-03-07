// import {query} from '@/getData/db'
import { query } from '../../../getData/db.js'


export default async function getContacts(req, res) {
  if (req.method === 'GET') {
    const contact = await query({
      //template for mysql
      // query: `SELECT id, page_id, lang, title, meta, content
      // FROM pages_content WHERE title=?`,
      // values: ['Контакты']
      query: `SELECT *
      FROM pages_content WHERE title='Контакты'`,
      values: []
    })


    res.json(contact)
  }

}
