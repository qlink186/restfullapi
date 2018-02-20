var db = require('../dbconnection'); //reference of dbconnection.js  
var Beritaall = {  
    getAllBeritaalls: function(callback) {  
        return db.query("SELECT * FROM v_berita_populer", callback);  
    },  
    getBeritaallById: function(id_berita, callback) {  
        return db.query("SELECT * FROM v_berita_populer WHERE id_berita=?", [id_berita], callback);  
    },  
    addBeritaall: function(Beritaall, callback) {  
        return db.query("INSERT INTO d_berita VALUES(?,?,?,?)", [Beritaall.id_berita, Beritaall.judul_berita, Beritaall.isi_berita_ringkas, Beritaall.isi_berita], callback);  
    },  
    deleteBeritaall: function(id, callback) {  
        return db.query("delete from d_berita where id_berita=?", [id_berita], callback);  
    },  
    updateBeritaall: function(id, Beritaall, callback) {  
        return db.query("update d_berita set judul_berita=?,isi_berita_ringas=? where id_berita=?", [Beritaall.judul_berita, Beritaall.isi_berita_ringkas, id_berita], callback);  
    }  
};  
module.exports = Beritaall;