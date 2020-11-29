const User = require(`../models/user`);
const bcrypt = require(`bcrypt`);
const saltRounds = 5;
const { validationResult } = require(`express-validator`);
// exports function
// then catch -> promise (try catch)

exports.getAllUsers = (req, res)=>{
    User.fetchAllUsers()
        .then(users=>res.json(users))
        .catch(err=>res.send(err));
}
exports.getUserOnId = (req, res)=>{
    User.fetchUserOnId(req.params.id)
        .then(user=>res.json(user))
        .catch(err=>res.send(err));
}
exports.insertUser =(req, res)=>{
    let errorList = validationResult(req);
    if(errorList.isEmpty()){
        const user = {
            firstname:req.body.firstname,
            lastname: req.body.lastname,
            password:req.body.password,
            email: req.body.email
        };
        //bcrypt password
        bcrypt.hash(req.body.password, 10, (err, hash)=>{
            user.password = hash
            //call model query
            User.insertUserQuery(user)
                .then(result=>res.json(result))
                .catch(err=>res.send(err));
        });
    }
    else{
        return res.status(400).json({errorList:errorList.array()});
    }
}
exports.checkLoginUser=async (req, res) => {
    let errorList = validationResult(req);
    if (errorList.isEmpty()) {
        //get user
        let user = await User.fetchUserOnEmail(req.body.email);
        //compare login password & db password
        let hash = user[0].password;
        bcrypt.compare(req.body.password,hash )
            .then(result=> {
                if(result){
                    res.send("login ok");
                }
                else{
                    res.send("wrong password");
                }
     })
             .catch(err=>res.status(400).send(err));
    } else {
        res.status(400).json({errorList: errorList.array()});
    }
}