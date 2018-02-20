var db = require('../dbconnection'); //reference of dbconnection.js  
var Opd = {  
    getAllOpds: function(callback) {  
        return db.query("SELECT * FROM v_opd", callback);  
    },  
    getOpdById: function(id_opd, callback) {  
        return db.query("SELECT * FROM v_opd WHERE id_opd=?", [id_opd], callback);  
    },  
    addOpd: function(Opd, callback) {  
        return db.query("INSERT INTO m_opd VALUES(?,?,?,?)", [Opd.id_opd, Opd.gelar_depan, Opd.nama, Opd.gelar_belakang], callback);  
    },  
    deleteOpd: function(id, callback) {  
        return db.query("DELETE FROM m_opd WHERE id_opd=?", [id_opd], callback);  
    },  
    updateOpd: function(id, Opd, callback) {  
        return db.query("UPDATE m_opd set nama=?,gelar_depan=? where id_opd=?", [Opd.gelar_depan, Opd.nama, Opd.gelar_belakang, id_opd], callback);  
    }  
};  
module.exports = Opd;