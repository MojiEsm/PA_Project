const env = process.env.NODE_ENV || 'development';

console.log(`*** ${env.toUpperCase()} ***`);

if(env ==='test'|| env === 'development' ){
    let config = require('./config.json');
    let envConfig = config[env]; //config[development];

    console.log(envConfig);
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
        //process.env.PORT = envConfig[PORT];
    });
}

