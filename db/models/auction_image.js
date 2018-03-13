'use strict';
module.exports = (sequelize, DataTypes) => {
    var AuctionImage = sequelize.define('AuctionImage', {
        name: DataTypes.STRING,
        rawImageData: DataTypes.STRING,

    });
    AuctionImage.associate = function (models) {
        models.AuctionImage.belongsTo(models.Auction, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    };
    return AuctionImage;

};