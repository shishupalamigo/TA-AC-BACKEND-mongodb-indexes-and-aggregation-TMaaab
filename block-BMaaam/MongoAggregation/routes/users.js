var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/active', function(req, res, next) {
  // Users with 'Blake' in their name
  // User.aggregate([
  //   {
  //     $match: {
  //       $text: {
  //         $search: 'blake'
  //       }
  //     }
  //   }
  // ], (err, users) => {
  //   if (err) return next(err);
  //   console.log(users);     
  //   res.render('active', { users });
  // })

  // Men with blue eyes working in USA 
  User.aggregate([
    { 
      $match: 
      { 
        eyeColor: 'blue',
        gender: 'male',
        'company.location.country': 'USA' 
         }
      }
    
  ], (err, users) => {
    if (err) return next(err);
    console.log(users);     
    res.render('active', { users });
  })

});



module.exports = router;
