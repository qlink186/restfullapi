var db = require('../dbconnection'); //reference of dbconnection.js  
var Beritahome = {  
    getAllBeritahomes: function(callback) {  
        return db.query("SELECT * FROM v_berita_home", callback);  
    },  
    getBeritahomeById: function(id_berita, callback) {  
        return db.query("SELECT * FROM v_berita_home WHERE id_berita=?", [id_berita], callback);  
    },  
    addBeritahome: function(Beritahome, callback) {  
        return db.query("INSERT INTO v_berita_home VALUES(?,?,?,?)", [Beritahome.id_berita, Beritahome.judul_berita, Beritahome.isi_berita_ringkas, Beritahome.isi_berita], callback);  
    },  
    deleteBeritahome: function(id, callback) {  
        return db.query("delete from v_berita_home where id_berita=?", [id_berita], callback);  
    },  
    updateBeritahome: function(id, Beritahome, callback) {  
        return db.query("update v_berita_home set judul_berita=?,isi_berita_ringas=? where id_berita=?", [Beritahome.judul_berita, Beritahome.isi_berita_ringkas, id_berita], callback);  
    }  
};  
module.exports = Beritahome;