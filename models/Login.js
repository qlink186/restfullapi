var db = require('../dbconnection'); //reference of dbconnection.js  
var Login = {  
    getAllLogins: function(callback) {  
        return db.query("SELECT * FROM v_users_active", callback);  
    },  
    getLoginById: function(id_user, callback) {  
        return db.query("SELECT * FROM v_users_active WHERE id_user=?", [id_user], callback);  
    },  
    addLogin: function(Login, callback) {  
        return db.query("INSERT INTO d_users VALUES(?,?,?,?)", [Login.id_user, Login.username, Login.nama, Login.onama_opd], callback);  
    },  
    deleteLogin: function(id, callback) {  
        return db.query("delete from d_users where id_user=?", [id_user], callback);  
    },  
    updateLogin: function(id, Login, callback) {  
        return db.query("update d_users set username=?,paswd=? where id_user=?", [Login.username, Login.paswd, id_user], callback);  
    }  
};  
module.exports = Login;