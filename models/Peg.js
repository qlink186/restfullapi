var db = require('../dbconnection'); //reference of dbconnection.js  
var Peg = {  
    getAllPegs: function(callback) {  
        return db.query("SELECT * FROM v_peg", callback);  
    },  
    getPegById: function(id_peg, callback) {  
        return db.query("SELECT * FROM v_peg WHERE id_peg=?", [id_peg], callback);  
    },  
    addPeg: function(Peg, callback) {  
        return db.query("INSERT INTO m_peg VALUES(?,?,?,?)", [Peg.id_peg, Peg.gelar_depan, Peg.nama, Peg.gelar_belakang], callback);  
    },  
    deletePeg: function(id, callback) {  
        return db.query("DELETE FROM m_peg WHERE id_peg=?", [id_peg], callback);  
    },  
    updatePeg: function(id, Peg, callback) {  
        return db.query("UPDATE m_peg set nama=?,gelar_depan=? where id_peg=?", [Peg.gelar_depan, Peg.nama, Peg.gelar_belakang, id_peg], callback);  
    }  
};  
module.exports = Peg;