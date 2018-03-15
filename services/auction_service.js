//create auction
//delete auction
//update auction
//buy auction
'use strict'
const models = require('../db/models'), Serializer = require('sequelize-to-json'), _ = require('lodash');

const schema = {
    include: ['@all'],
    exclude: [],
    assoc: {
        // scheme to be used for the associated `Auction` instance

    }
};

const getAllAuctions = async () => {
    const auctions = await models.Auction.findAll({
        include: [models.AuctionImage],
        where: {
            is_deleted: false
        }
    });
    return Serializer.serializeMany(auctions, models.Auction, schema);
}

const getAuctionById = async (id) => {
    const auction = await models.Auction.find({
        where: {
            id: id
        }
    })
    return auction.get({plain: true});
}

const insertAuction = async (auction) => {
    const insertedAuction = await models.Auction.create(auction)
    return insertedAuction.get({plain: true});
}


const updateAuction = async (_auction) => {
    const auction = await getAuctionById(_auction.id)
    if (mayUpdateAuction(auction)) {
        const updatedAuction = _.assign({}, auction, _auction);
        await models.Auction.update({
            ...updatedAuction,
        }, {
            where: {
                id: updatedAuction.id
            }
        });
    }
}

const deleteAuction = async (_id) => {
    const auction = await getAuctionById(_id)
    auction.is_deleted = true
    await updateAuction(auction)
}

const mayUpdateAuction = (auction) => {
    return auction && !auction.is_sold
}

module.exports = {getAllAuctions, getAuctionById, insertAuction, updateAuction, deleteAuction}