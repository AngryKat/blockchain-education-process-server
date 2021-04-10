const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => {
    res.send('welcome!')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})