const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

const app = express()
const PORT = 5656

app.use(cors())
app.use(express.json())

app.get('/box_breaks', routes.getAllBreaks)
app.post('/box_breaks', routes.createNewBreak)
app.get('/box_breaks/:id', routes.getBreakById)
app.delete('/box_breaks/:id', routes.deleteBreakById)

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}.`))