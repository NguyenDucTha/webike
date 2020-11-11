var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  get: (req, res) => {
    var stockId = Number(req.params.stockId)
    sql = 'select motor.* from motor '+
    'join stockinventory '+
    'on motor.motorId = stockinventory.motorId and motor.stockId = ?;'

    db.query(sql, [stockId], (err, result) => {
      if (err) throw err
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