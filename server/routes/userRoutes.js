const pool = require('../db')

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users;')

    res.json(allUsers.rows)
  } catch (error) {
    console.log(error.message)
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params

  const selectedUser = await pool.query(
    'SELECT * FROM users WHERE user_id = $1;',
    [id]
  )

  res.json(selectedUser.rows[0])
}

const createNewUser = async (req, res) => {
  const { first_name, last_name } = req.body

  const newUser = await pool.query(
    'INSERT INTO users (first_name, last_name) VALUES($1, $2) RETURNING *;',
    [first_name, last_name]
  )

  res.json(newUser.rows[0])
}

const deleteUserById = async (req, res) => {
  const { id } = req.params

  const deletedUser = await pool.query(
    'DELETE FROM users WHERE user_id = $1 RETURNING *;',
    [id]
  )

  res.json(`User '${deletedUser.rows[0].first_name.toUpperCase() + " " + deletedUser.rows[0].last_name.toUpperCase()}' has been deleted.`)
}

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUserById,
  getUserById
}