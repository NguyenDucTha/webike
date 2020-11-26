var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  get: (req, res) => {
    var userName = req.params.userName
    var email = req.params.email
    sql = 'Select * from user where userName = ? or email = ?;'

    db.query(sql, [userName, email], (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'You have no authorized' })
        }
      }
    })
  }
}