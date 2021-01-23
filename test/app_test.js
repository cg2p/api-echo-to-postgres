var server   = require('../server.js'),
    chai     = require('chai'),
    chaiHTTP = require('chai-http'),
    should   = chai.should();

chai.use(chaiHTTP);

reqServer = process.env.HTTP_TEST_SERVER || server;

describe('Basic routes tests', function() {

    it('GET to /live should return 200', function(done){
        chai.request(reqServer)
        .get('/live')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })
    })

    it('GET to /ready should return 200', function(done){
        chai.request(reqServer)
        .get('/ready')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })
    })
})