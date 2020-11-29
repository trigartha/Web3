const db = require(`../config/db`);


//for each table in the db we need a model
//they are responsible for their own queries
//promises ~ callbacks
//Object with function that fetches all users
const User = {
    fetchAllUsers:()=> {
        //resolve and reject -> arguments (callback functions behind the screen)
        //resolve -> succes
        //reject -> error
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users`, (err, users, fields) => {
                if (err) reject(err);
                resolve(users);
            })
        })
    },
    fetchUserOnId:(id)=>{
        return new Promise((resolve, reject)=> {
            db.query(`SELECT * FROM users WHERE id = ?`, [id], (err, user, fields)=>{
                if(err) reject (err);
                resolve(user);
            })
        })
    },
    fetchUserOnEmail:(email)=>{
        return new Promise((resolve, reject)=> {
            db.query(`SELECT * FROM users WHERE email = ?`, [email], (err, user, fields)=>{
                if(err) reject (err);
                resolve(user);
            })
        })
    },
    insertUserQuery:(user)=>{
        return new Promise((resolve, reject)=>{
            db.query(`INSERT INTO users SET ?`,[user], (err, results, fields)=>{
                if(err) reject (err);
                resolve(results);
            })
        })
    }
}
module.exports = User;