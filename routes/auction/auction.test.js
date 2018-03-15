const request = require('supertest'),
    express = require('express'),
    mocha = require('mocha'),
    auction = require('../../test/data/auction');

const app = require('../../app');

describe('auction route ', function () {

    before(() => {

    })

    it('returns auctions as a json', function (done) {
        request(app)
            .get('/api/auction')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });

    it('inserts auctions', function (done) {

        done()
    })

});