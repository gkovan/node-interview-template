'use strict';

var Solution = require('./solution');

describe('Solution', function() {
  it('2 should equal 2', function() {
    expect(2).to.equal(2);
  });

  it('shoud say hello', function() {
    const wp =  new Solution("gerry")
    console.log(wp);

    expect(wp.greet()).to.equal("gerry says hello.");
  });

});
