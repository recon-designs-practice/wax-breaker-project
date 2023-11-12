const express = require('express')
const cors = require('cors')
const breaksRoutes = require('./routes/breaksRoutes')
const usersRoutes = require('./routes/userRoutes')

const app = express()
const PORT = 5656

// Middleware
app.use(cors())
app.use(express.json())

// breaks routes
// app.get('/box_breaks', breaksRoutes.getAllBreaks)
// app.post('/box_breaks', breaksRoutes.createNewBreak)
// app.get('/box_breaks/:id', breaksRoutes.getBreakById)
// app.put('/box_breaks/:id', breaksRoutes.updateBreakById)
// app.delete('/box_breaks/:id', breaksRoutes.deleteBreakById)

// users routes
app.get('/users', usersRoutes.getAllUsers)
// app.get('/users/:id', usersRoutes.getUserById)
app.post('/users', usersRoutes.createNewUser)
// app.delete('/users/:id', usersRoutes.deleteUserById)

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}.`))