var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  get: (req, res) => {
    var userId = req.params.userId
    sql = 'select motor.*, cart.quantity, cart.motorId from motor '+
    'join user '+
    'join cart on cart.motorId = motor.motorId and user.userId = ? and user.userId = cart.userId;'

    db.query(sql, [userId], (err, result) => {
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