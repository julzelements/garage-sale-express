//create auction
//delete auction
//update auction
//buy auction
'use strict'
const models = require('../db/models'), Serializer = require('sequelize-to-json');

const scheme = {
    include: ['@all'],
    exclude: [],
    assoc: {
        // scheme to be used for the associated `Auction` instance

    }
};

const getAuctions = () => {
    models.Auction.findAll({
        include: [models.AuctionImage]
    })
}

module.exports = {getAuctions}