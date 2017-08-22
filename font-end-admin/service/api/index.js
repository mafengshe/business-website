const About = require('../model/about')

class Api {

  static async index (ctx) {
    ctx.body = {
      status: '200',
      data: '主页！'
    }
  }
  /**
   * get the product page
   */
  static async getProduct (ctx) {
    ctx.body = {
      status: '200',
      data: '成功！'
    }
  }
  /**
   * edit the product page
   */
  static async editProduct (ctx) {
    ctx.body = {
      status: '200',
      data: '成功！'
    }
  }
  /**
   * get the about page
   */
  static async getAbout (ctx) {
    let about = await About.find({})
    ctx.body = {
      status: '200',
      data: about
    }
  }
  /**
   * edit the About page
   */
  static async editAbout (ctx) {
    let about = new About(ctx.request.body)
    console.log(about)
    await about.save()
    ctx.body = {
      status: '200',
      data: 'success'
    }
  }
}

module.exports = Api

