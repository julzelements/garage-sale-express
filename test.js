const request = require('supertest');
const express = require('express');
const mocha = require('mocha');

const app = require('./app');

describe('GET /user', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200, done);
  });
});