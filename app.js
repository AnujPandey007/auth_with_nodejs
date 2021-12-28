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

app.post('/insert', (req, res)=>{
    User.create({
        firstName: req.body.firstName,
        age: req.body.age
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
        console.log(req.body.firstName);
        user.update({
            firstName: req.body.firstName,
            age: req.body.age
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
