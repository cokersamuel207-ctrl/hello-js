require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use((req, res, next) => {
    console.log(`-> Method-->(${req.method}): URL-->(${req.url}) - ${new Date()} \n`)
    next()
})

app.get('/', (req, res) => {
    res.send('My week 2 API')
})

app.post('/user', (req, res) => {
    const { name, email } = req.body
    if ( !name  ) return res.status(400).json({ error: "Name is a required field"})
    if ( !email  ) return res.status(400).json({ error: "Email is a required field"})
    
    res.status(201).json({ message: `Hello ${name}(${email})` })
})

app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: "Samie"})
})

app.listen(PORT, () => {
    console.log(`Week_2_API is live on port ${PORT}`)
})