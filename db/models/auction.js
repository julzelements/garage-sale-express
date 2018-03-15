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
        is_sold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    Auction.associate = function (models) {
        models.Auction.hasMany(models.AuctionImage);
    };

    return Auction;
};