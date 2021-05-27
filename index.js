const express = require('express')
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const app = express()

// Home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// About
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})
// Blog
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html')
})

app.get('/date', (req, res) => {
	const date = req.query.date
	const daysAgo = dayjs(date).fromNow()
	res.send(daysAgo)

})

app.listen(8000)
