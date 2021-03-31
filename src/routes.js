const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const connection = databaseConnect()
var SQLresult

function databaseConnect() {
    return mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "mysql",
        database: "the_name_game"
    })
}

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/get_names', (req, res) => {
    const queryString = "SELECT name FROM names"
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Something is wrong with your MySQL connection. " + err)
        }
        else {
            console.log("Connection successfully established. Data has been retrieved.")
            SQLresult = (res.json(rows))
        }
    })
})

module.exports = router, SQLresult