let express = require('express');
let app = express();
let bodyParser = require('body-parser')

require('dotenv').config()

/*app.use((req, res, next) => {
    console.log("GET /json - ::ffff:127.0.0.1")
    next()
})*/

/* 01 - Meet the Node console

console.log("Hello World")
*/

/* 02 - Start a Working Express Server

app.get('/', (req, res) => {
    res.send("Hello Express")
})
*/
/* 03 - Serve an HTML File

app.get('/', (req, res, next) => {
    const absolutePath = __dirname + '/views/index.html'

    res.sendFile(absolutePath)
})
*/

/* 04 - Serve Static Assets

app.get('/', (req, res, next) => {
    const absolutePath = __dirname + '/views/index.html'

    res.sendFile(absolutePath)
})

app.use('/public',  express.static(__dirname + '/public'))
*/

/* 05 - Serve JSON on a Specific Route

app.get('/json', (req, res) => {
    res.json({
        "message": "Hello json"
    })
})
*/

/* 06 - Use the .env File

app.get('/json', (req, res) => {
    let message = "Hello json"

    return process.env.MESSAGE_STYLE === 'uppercase' ? res.json({ "message": message.toUpperCase() }) : res.json({ "message": message })
})
*/

/* 07 - Implement a Root-Level Request Logger Middleware

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({
        "time": req.time
    })
})*/

/* 08 - Chain Middleware to Create a Time Server

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()

}, (req, res) => {
    res.json({ time: req.time })
})
*/

/* 09 - Get Route Parameter Input from the Client

app.get('/:word/echo', (req, res, next) => {
    word = req.params.word
    next()

}, (req, res) =>{
    res.json({
        echo: word
    })
})*/

/* 10 - Get Query Parameter Input from the Client

app.route('/name').get((req, res, next) => {
    firstname = req.query.first;
    lastname = req.query.last;
    next();

}, (req, res) => {
    res.json({
        name: `${firstname} ${lastname}`
    })
})
 */

/* 11 - Use body-parser to Parse POST Requests

app.route('/name').get((req, res, next) => {
    firstname = req.query.first;
    lastname = req.query.last;
    next();

}, (req, res) => {
    res.json({
        name: `${firstname} ${lastname}`
    })
})

app.use(bodyParser.urlencoded({ extended: false }))
*/

/* 12 -Get Data from POST Requests
*/
app.use('/public',  express.static(__dirname + '/public'))


app.get('/', (req, res, next) => {
    const absolutePath = __dirname + '/views/index.html'

    res.sendFile(absolutePath)
})

app.route('/name').get((req, res, next) => {
    firstname = req.query.first;
    lastname = req.query.last;
    next();

}, (req, res) => {
    res.json({
        name: `${firstname} ${lastname}`
    })
})

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/name', (req, res) => {
    let string = req.body.first + " " + req.body.last
    res.json({ name: string })
})


module.exports = app;