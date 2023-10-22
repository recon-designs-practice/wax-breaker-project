const pool = require('./db')
const moment = require('moment')

const getAllBreaks = async (req, res) => {
  try {
    const allBreaks = await pool.query('SELECT * FROM box_break;')

    res.json(allBreaks.rows)
  } catch (error) {
    console.log(error.message)
  }
}

const createNewBreak = async (req, res) => {
  try {
    const breakDate = moment().format()
    const { break_name } = req.body

    const newBoxBreak = await pool.query(
      "INSERT INTO box_break (break_name, break_date) VALUES($1, $2) RETURNING *;",
      [break_name, breakDate]
    )

    res.json(newBoxBreak.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getAllBreaks,
  createNewBreak
}