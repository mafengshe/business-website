let mongoose = require('../db.js')
let Schema = mongoose.Schema

let AboutSchema = Schema({
  cmpDesc: { type: String },                    // 用户账号
  teamDesc: {type: String}                        // 密码
})

module.exports = mongoose.model('About', AboutSchema)
