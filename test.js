const testString = require('./dist/index.js');
const { version } = require('./package');
const assert = require('assert');

describe('Mock test', function() {
    it('tests stuff', function() {
        assert.equal(`ci-test v${version}`, testString)
    })
});
