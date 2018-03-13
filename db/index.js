const models = require('./models');

models.sequelize.sync().then(function () {
    console.log("db synced.....")
});