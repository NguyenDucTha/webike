let getAll = require('./Controller/motor/getAll')
let getInfor = require('./Controller/motor/getInfor')

let addToCart = require('./Controller/cart/addToCart')
let getCartDetail = require('./Controller/cart/getCartDetail')
let addQuantity = require('./Controller/cart/addQuantity')
let deleteCartItem = require('./Controller/cart/deleteCartItem')

let getItemByStock = require('./Controller/stockInventory/getItemByStock')

let getType = require('./Controller/type/getType')

let handleLogin = require('./Controller/user/handleLogin')

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    next();
  });
  
  app.route('/motor')
    .get(getAll.get)

  app.route('/motor/:motorId')
    .get(getInfor.get)

  app.route('/cart')
    .post(addToCart.post)

  app.route('/cart/quantity')
    .post(addQuantity.post)

  app.route('/cart/:userId/:motorId')
    .delete(deleteCartItem.delete)

  app.route('/cart/:userId')
    .get(getCartDetail.get)

  app.route('/stock/:stockId')
    .get(getItemByStock.get)

  app.route('/type')
    .get(getType.get)

  app.route('/user/:userName/:email')
    .get(handleLogin.get)

}