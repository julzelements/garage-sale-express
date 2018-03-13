'use strict';
module.exports = (sequelize, DataTypes) => {
    var Auction = sequelize.define('Auction', {
        item_name: DataTypes.STRING,
        serial_number: DataTypes.STRING,
        condition: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        seller: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        is_sold: DataTypes.BOOLEAN,

    });
    Auction.associate = function (models) {
        models.Auction.hasMany(models.AuctionImage);
    };

    return Auction;
};