var express = require('express');
var router = express.Router();
var Peg = require('../models/Peg');  
router.get('/:id_peg?', function(req, res, next) {  
    if (req.params.id_peg) {  
        Peg.getPegById(req.params.id_peg, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Peg.getAllPegs(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Peg.addPeg(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id_peg', function(req, res, next) {  
    Peg.deletePeg(req.params.id_user, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id_peg', function(req, res, next) {  
    Peg.updatePeg(req.params.id_peg, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router;
