var express = require('express');
var router = express.Router();
var Login = require('../models/Login');  
router.get('/:id_user?', function(req, res, next) {  
    if (req.params.id_user) {  
        Login.getLoginById(req.params.id_user, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Login.getAllLogins(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Login.addLogin(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id_user', function(req, res, next) {  
    Login.deleteLogin(req.params.id_user, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id_user', function(req, res, next) {  
    Login.updateLogin(req.params.id_user, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router;
