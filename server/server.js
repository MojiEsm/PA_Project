//require('./config/config');

//-------config direction
process.env.NODE_CONFIG_DIR = __dirname + '/config';
const config = require('config');
const express = require('express');
const _ = require('loadsh');

const {User} = require('./model/user');

console.log(`*** ${String(config.get('level')).toUpperCase()} ***`);

// let newUser = new User({
//     fullName:'James Milner',
//     email: 'Tsfafdrn.com',
//     password:'123456'
// });

// newUser.save().then((user)=>{
//     console.log(user);
// });

const app = express();

app.use(express.json());

app.post('/api/users',(req,res)=>{
    const body = _.pick(req.body,['fullName','email', 'password']);

    console.log(body);

    let user = new User(body);

    user.save().then((user)=>{
        res.status(200).send(user);
    },(err)=>{
        res.status(400).json({
            Error: `Something went wrong ${err}`
        });
    })
});

app.listen(config.get('PORT'),()=>{
    console.log(`Server is running at port ${config.get('PORT')}`);
});