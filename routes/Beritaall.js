var express = require('express');
var router = express.Router();
var Beritaall = require('../models/Beritaall');
router.get('/:id_berita?', function(req, res, next){
    if (req.params.id_berita) {
        Beritaall.getBeritaallById(req.params.id_berita, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Beritaall.getAllBeritaalls(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function(req, res, next) {
    Beritaall.addBeritaall(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.delete('/:id_berita', function(req, res, next) {
    Beritaall.deleteBeritaall(req.params.id_berita, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.put('/:id_berita', function(req, res, next) {
    Beritaall.updateBeritaall(req.params.id_berita, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;
