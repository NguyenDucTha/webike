var express = require('express')
var mysql = require('mysql')
var db = require('../../database')

module.exports = {
  get: (req, res) => {
    sql = 'Select * from motor limit 20;'

    db.query(sql, (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'No exam exists' })
        }
      }
    })
  }
}