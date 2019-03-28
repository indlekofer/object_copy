import assert from 'assert';

import c from '../src/index';

describe('clone', () => {
  it('basic clone test', () => {
    assert.equal(JSON.stringify(c({test: 1, test2: 2}, ["test2"])), JSON.stringify({test: 1}));
  });
  it('without optional exclude', () => {
    assert.equal(JSON.stringify(c({test: 1, test2: 2})), JSON.stringify({test: 1, test2: 2}));
  });
  it('null test', () => {
    assert.equal(c(null, ["test2"]), null);
  });
  it('reference check', () => {
    var a = {a: 1};
    var b = c(a);
    assert.equal(false, a === b);
  });
  it('props', () => {
    function a() {
      this.c = 1;
    };
    a.prototype.b = 10;
    var b = new a();
    assert.equal(b.b, 10);
    assert.equal(JSON.stringify(c(b)), JSON.stringify({c: 1}));
  });
});
