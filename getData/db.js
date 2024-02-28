
// template for postgresql conection
// import {Pool} from 'pg'

// export async function query({query, values}){
//   const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME, 
//     pool: 1,
//     max: 20,
//     idleTimeoutMillis: 30000
//   })

//   try{
//     const result = await pool.query(query, values)
//     await pool.end()
//     console.log(result, 'db');
//     return result.rows
//   }catch(error){
//     console.error(error)
//     return {error}
//   }


// }





// template for mysql db


import mysql from 'mysql2/promise'

export async function query({query, values = []}){
  const db = await mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    charset: 'utf8',
  })
  try{
    const [result] = await db.execute(query, values)
    db.end()
    return result
  }catch(error){
    console.error(error)
    return {error}
  }

}