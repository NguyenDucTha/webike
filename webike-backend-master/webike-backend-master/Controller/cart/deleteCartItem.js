const { json } = require('body-parser')
var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  delete: (req, res) => {
    var userId = req.body.userId
    var motorId = req.body.motorId
    sql = 'DELETE FROM cart WHERE userId=? and motorId = ?;'

    db.query(sql, [userId, motorId], (err, result) => {
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