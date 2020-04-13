//require('./config/config');

//-------config direction
process.env.NODE_CONFIG_DIR = __dirname + '/config';
const config = require('config');

const {User} = require('./model/user');

console.log(`*** ${String(config.get('level')).toUpperCase()} ***`);

let newUser = new User({
    fullName:'James Milner',
    email: 'Tsfafdrn.com',
    password:'123456'
});

newUser.save().then((user)=>{
    console.log(user);
});