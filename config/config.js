const fs = require('fs');

module.exports = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'garage_sale_dev',
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false
    },
    test: {
        username: 'postgres',
        password: 'postgres',
        database: 'garage_sale_dev',
        host: 'localhost',
        dialect: 'postgres'
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres'
    }
};
