var HttpBackend = require('http-backend-proxy');
var proxy = new HttpBackend(browser);

describe('the test...', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('passes', function() {
        proxy.when('GET', 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.jxs').respond(200);

        expect(true).toEqual(true);
    });
});
