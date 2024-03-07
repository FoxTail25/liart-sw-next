import { query } from '../../../getData/db.js'


export default async function news(req, res) {
  if (req.method === 'GET') {
    const { page_lang } = req.query
    // console.log(page_lang.split('_')[1], Number(page_lang.split('_')[0] - 1) * 10);
    const news = await query({
      query: `SELECT *
      FROM news_news
      WHERE lang = ? AND publicated >= 1
      ORDER BY id DESC
      LIMIT 10 OFFSET ?;`,
      values: [page_lang.split('_')[1], Number(page_lang.split('_')[0] - 1) * 10]
    })
    const total = await query({
      query: `SELECT count(lang) AS total
      FROM news_news
      WHERE lang = ? AND publicated >= 1;`,
      values: [page_lang.split('_')[1]]
    })
    res.json({ news: news, total: total })
  }

}

