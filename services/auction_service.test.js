const service = require('./auction_service'),
    auctionSample = require('../test/data/auction'),
    models = require('../db/models/index'),
    Serializer = require('sequelize-to-json'),
    expect = require('chai').expect,
    assert = require('chai').assert;

describe('auction service ', function () {

    const auction = {
        item_name: "Test",
        description: "Core i7 Macbook Pro",
        serial_number: "123",
        seller: null,
        price: 100,
        location: "Brisbane",
        is_sold: true,
        is_deleted: false
    };

    before(async () => {
        await models.Auction.destroy({where: {}});
        createAuction();
    });

    it('returns a list of auctions', async () => {
        var auctionList = await service.getAllAuctions();
        const persistedAuction = auctionList[0];
        assert(persistedAuction, "auction is not null")
        assert(persistedAuction.id, "auction.id is not null")
        expect(auction.item_name).equal(persistedAuction.item_name)
        expect(auction.description).equal(persistedAuction.description)
        expect(auction.serial_number).equal(persistedAuction.serial_number)
        expect(auction.seller).equal(persistedAuction.seller)
        expect(auction.price).equal(persistedAuction.price)
        expect(auction.location).equal(persistedAuction.location)
        expect(auction.is_sold).equal(persistedAuction.is_sold)
    })


    it('can insert an auction', async () => {
        var insertedAuction = await service.insertAuction(auction);
        assert(insertedAuction, "auction is not null")
        assert(insertedAuction.id, "auction.id is not null")
        expect(auction.item_name).equal(insertedAuction.item_name)
        expect(auction.description).equal(insertedAuction.description)
        expect(auction.serial_number).equal(insertedAuction.serial_number)
        expect(auction.seller).equal(insertedAuction.seller)
        expect(auction.price).equal(insertedAuction.price)
        expect(auction.location).equal(insertedAuction.location)
        expect(auction.is_sold).equal(insertedAuction.is_sold)
    })

    it('can select an auction by id', async () => {
        var insertedAuction = await service.insertAuction(auction);
        assert(insertedAuction, "inserted auction is not null")
        var selectedAuction = await service.getAuctionById(insertedAuction.id)
        assert(selectedAuction, "selected auction is not null")
        expect(insertedAuction).to.deep.equal(selectedAuction)
    })

    it('can update an auction', async () => {
        auction.is_sold = false;
        var insertedAuction = await service.insertAuction(auction);

        insertedAuction.description = "updated description";
        insertedAuction.serial_number = "updated serial_number";
        insertedAuction.is_sold = false;
        await service.updateAuction(insertedAuction);

        var updatedAuction = await service.getAuctionById(insertedAuction.id)
        assert(updatedAuction, "updated auction is not null")
        expect(insertedAuction.description).equal(updatedAuction.description)
        expect(insertedAuction.serial_number).equal(updatedAuction.serial_number)

    })

    it('can delete an auction', async () => {
        auction.is_sold = false;
        auction.is_deleted = false;
        var insertedAuction = await service.insertAuction(auction);
        await service.deleteAuction(insertedAuction.id)
        var deletedAuction = await service.getAuctionById(insertedAuction.id)
        expect(deletedAuction.is_deleted).equal(true)
    })

    it('can buy an auction', async () => {
        auction.is_sold = false;
        auction.is_deleted = false;
        var insertedAuction = await service.insertAuction(auction);
        await service.buyAuction(insertedAuction.id)
        var deletedAuction = await service.getAuctionById(insertedAuction.id)
        expect(deletedAuction.is_sold).equal(true)
    })

    async function createAuction() {
        return await models.Auction.create(auction)
    }


})