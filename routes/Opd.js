var express = require('express');
var router = express.Router();
var Opd = require('../models/Opd');  
router.get('/:id_opd?', function(req, res, next) {  
    if (req.params.id_opd) {  
        Opd.getOpdById(req.params.id_opd, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Opd.getAllOpds(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Opd.addOpd(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:id_opd', function(req, res, next) {  
    Opd.deleteOpd(req.params.id_user, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id_opd', function(req, res, next) {  
    Opd.updateOpd(req.params.id_opd, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router;
