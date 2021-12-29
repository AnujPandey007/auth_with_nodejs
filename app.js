const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = /*process.env.PORT ||*/ 3000;

app.use(bodyParser.json());
const db = require("./models");
const {User} = require("./models");


app.get('/select', (req, res)=>{
    User.findAll().then((users)=>{
        res.send(users);
    }).catch(err => {
        if(err){
            throw err;
        }
    });
});

app.get('/select/:id', (req, res)=>{
    User.findAll({where: {id: req.params.id}}).then((users)=>{
        res.send(users);
    }).catch(err => {
        if(err){
            throw err;
        }
    });
});

//For checking if a variable is falsey or if the string only contains whitespace or is empty, I use:
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

app.post('/insert', (req, res)=>{
    if(isBlank(req.body.firstName) || isBlank(req.body.lastName)){
        res.status(404).json("Name Cant be blank.");
        return;
    }

    if(!req.body.userAge || req.body.userAge <= 10){
        res.status(404).json("Age Should be more than 10+.");
        return;
    }
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        userAge: req.body.userAge
    }).catch(err => {
        if(err){
            throw err;
        }
    }).then(function(note) {
        res.json(note);
    });
});

app.put('/update/:id', (req, res)=>{
    User.findByPk(req.params.id).then(function(user) {
        if(!req.body.userAge || req.body.userAge <= 10){
            res.status(404).json("Age Should be more than 10+.");
            return;
        }
        user.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword,
            userAge: req.body.userAge
        }).catch(err => {
            if(err){
                throw err;
            }
        }).then((user) => {
            res.json(user);
        });
    });
});

app.delete('/delete/:id', async (req, res)=>{
    let deletedUser = await User.findByPk(req.params.id);
    User.destroy({where: {id: req.params.id}}).then(() => {
        res.json(deletedUser);
    });
});

db.sequelize.sync().then((req)=>{
    app.listen(port, () => {
        console.info(`Listening on port http://localhost:${port}`);
    });
});
