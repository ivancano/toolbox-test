var app = require('../app');
var chai = require('chai');
var request = require('supertest');


var expect = chai.expect;

describe('API Test', function(){
	it('should return sent text', function(done) {
		request('http://localhost:3000/')
		.post('send-text')
		.send({text: 'asd'})
		.end(function(err, res) {
			if(err) return done(err);
			expect(res.statusCode).to.equal(200);
			done();
		});
	});
});