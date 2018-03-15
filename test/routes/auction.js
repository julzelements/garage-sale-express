const request = require('supertest');
const express = require('express');
const mocha = require('mocha');

const app = require('../../app');

describe('auction route ', function () {

    it('returns auctions as a json', function (done) {
        request(app)
            .get('/api/auction')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json')
            .expect(200, done);
    });

});