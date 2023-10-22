const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5656

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}.`))