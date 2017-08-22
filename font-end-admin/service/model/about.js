let mongoose = require('../db.js')
let Schema = mongoose.Schema

let AboutSchema = Schema({
  cmpDesc: { type: String },                    // 公司简介
  teamDesc: {type: String}                      // 团队介绍
})

module.exports = mongoose.model('About', AboutSchema)
