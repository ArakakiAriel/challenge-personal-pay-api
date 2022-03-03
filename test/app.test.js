const request = require('supertest');
const app = require('../app');
const should = require('should');
const logger = require('../app/logger/logger');

describe('GET /v1/location', () => {
    /**
     * Testing get user location OK
     */
    it('respond with json containing the user location data by ipapi', (done) => {
        request(app)
            .get('/v1/location')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                res.status.should.equal(200);
                logger.warn(res.text)
                JSON.parse(res.text).location.status.should.equal('success');
                if(err) return done(err);
                return done();
            });
    });


    /**
     * Testing get user location NOK - localhost without 'x-forwarded-for' header
     */
    it('respond with error if header x-forwarded-for is not sent', (done) => {
        request(app)
            .get('/v1/location')
            .expect('Content-Type', /json/)
            .expect(400, done);
    });
});


describe('GET /v1/current', () => {
    /**
     * Testing get current weather by IP OK
     */
    it('respond with json containing the user location data by ipapi and local current weather info by openWeatherMap api', (done) => {
        request(app)
            .get('/v1/current')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


    /**
     * Testing get current weather by city OK
     */
    it('respond with json containing the user location data by ipapi and city current weather info by openWeatherMap api', (done) => {
        request(app)
            .get('/v1/current/buenos%20aires')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    /**
     * Testing get current weather by city NOK - City not found
     */
    it('respond with error when city does not exist', (done) => {
        request(app)
            .get('/v1/current/lkjdfaslf')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
})

describe('GET /v1/forecast', () => {
    /**
     * Testing get forecast weather by IP OK
     */
    it('respond with json containing the user location data by ipapi and local forecast weather info by openWeatherMap api', (done) => {
        request(app)
            .get('/v1/forecast')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


    /**
     * Testing get forecast weather by city OK
     */
    it('respond with json containing the user location data by ipapi and city forecast weather info by openWeatherMap api', (done) => {
        request(app)
            .get('/v1/forecast/buenos%20aires')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    /**
     * Testing get forecast weather by city NOK - City not found
     */
    it('respond with error when city does not exist', (done) => {
        request(app)
            .get('/v1/current/lkjdfaslf')
            .set('x-forwarded-for', '123.21.54.5')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect({
                code: "error",
                message: "city not found"
            })
            .end((err) => {
                if(err) return done(err);
                return done();
            });
    });
})

describe('GET /healthcheck',() => {
    /**
     * Testing healthcheck
     */
     it('respond with OK if server is running', (done) => {
        request(app)
            .get('/healthcheck')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({
                code: "OK",
                message: "Server is up and running"
            })
            .end((err) => {
                if(err) return done(err);
                return done();
            });
    });
})
describe('Invalid URL',() => {
    /**
     * Testing use URI not handled
     */
     it('respond with error when URL is invalid', (done) => {
        request(app)
            .get('/v1/invalid')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect({
                code: 404,
                message: "Invalid URL"
            })
            .end((err) => {
                if(err) return done(err);
                return done();
            });
    });
})

