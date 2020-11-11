var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  get: (req, res) => {
    var motorId = req.params.motorId
    sql = 'Select * from motor where motorId = ?;'

    db.query(sql, [motorId], (err, result) => {
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