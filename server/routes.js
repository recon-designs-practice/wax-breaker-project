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
    const { break_name } = req.body
    const breakDate = moment().format()

    const newBoxBreak = await pool.query(
      "INSERT INTO box_break (break_name, break_date) VALUES($1, $2) RETURNING *;",
      [break_name, breakDate]
    )

    res.json(newBoxBreak.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}

const getBreakById = async (req, res) => {
  try {
    const { id } = req.params

    const selectedBreak = await pool.query(
      'SELECT * FROM box_break WHERE box_break_id = $1;',
      [id]
    )

    res.json(selectedBreak.rows[0])
  } catch (error) {
    console.log(error.message)
  }
}

const deleteBreakById = async (req, res) => {
  try {
    const { id } = req.params

    const deletedBreak = await pool.query(
      'DELETE FROM box_break WHERE box_break_id = $1 RETURNING *;',
      [id]
    )

    res.json(`Box break '${deletedBreak.rows[0].break_name.toUpperCase()}' has been deleted.`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getAllBreaks,
  createNewBreak,
  getBreakById,
  deleteBreakById
}