const { json } = require('body-parser')
var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  post: (req, res) => {
    var userId = req.body.userId
    var motorId = req.body.motorId
    var quantity = req.body.quantity
    sql = 'UPDATE cart SET quantity = ? WHERE userId = ? and motorId = ?;'


    db.query(sql, [quantity, userId, motorId], (err, result) => {
      if (err) result.json(err)
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'Unauthorized' })
        }
      }
    })
  }
}