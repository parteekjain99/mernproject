const express = require("express")
const port = process.env.PORT || 3000
const app =express()
 app.use(express.json())
 app.use(express.static('./client'));



app.get('/*', (req, res) =>

    res.sendFile('index.html', { root: 'client/' })

);
 app.listen(port ,() => {
    console.log("connected")
 })