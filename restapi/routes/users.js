const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const bodyParser = require('body-parser');
// create json parser
const jsonParser = bodyParser.json()
const { check } = require('express-validator');

//home page
router.route('/')
    .get((req, res)=>{
  res.send("<p>Home Page</p>");
});
// localhost:3306/users/
router.route('/users')
    .get(UserController.getAllUsers)
    .post(jsonParser,[
      check('firstname').isLength({min:1}).trim().escape(),
      check('lastname').isLength({min:1}).trim().escape(),
      check('password').isLength({min:6}).trim().escape(),
      check('email').isEmail().normalizeEmail()],
        UserController.insertUser);
//login
router.route('/users/login')
    .post(jsonParser, [
            check('password').isLength({min:6}).trim().escape(),
            check('email').isEmail().normalizeEmail()],
        UserController.checkLoginUser);
// Id
router.route('/user/:id')
    .get(UserController.getUserOnId);

// localhost:3306/users/test
router.get('/test', (req, res, next) =>{
  res.send('respond with a resource');
});
//FallBack if request doesn't match routes - Last route in the file!
router.route(`*`)
    .get((req, res) => {
  res.status(404).send("<p> Nothing found</p>");
});
module.exports = router;
