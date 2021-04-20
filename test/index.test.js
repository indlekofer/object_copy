import assert from 'assert';

import copy from '../src/index';

describe('clone', () => {
  it('basic clone test', () => {
    assert.equal(JSON.stringify(copy({test: 1, test2: 2}, ["test2"])), JSON.stringify({test: 1}));
  });
  it('without optional exclude', () => {
    assert.equal(JSON.stringify(copy({test: 1, test2: 2})), JSON.stringify({test: 1, test2: 2}));
  });
  it('null test', () => {
    assert.equal(copy(null, ["test2"]), null);
  });
  it('reference check', () => {
    var a = {a: 1};
    var b = copy(a);
    assert.equal(false, a === b);
  });
  it('props', () => {
    function a() {
      this.c = 1;
    };
    a.prototype.b = 10;
    var b = new a();
    assert.equal(b.b, 10);
    assert.equal(JSON.stringify(copy(b)), JSON.stringify({c: 1}));
  });
  it('ignore prototype', () => {
    function TestObj(test1, test2) {
      this.test1 = test1;
      this.test2 = test2;
    }
    TestObj.prototype.test3 = 3;
    var test = new TestObj(1, 2);

    var copied = copy(test, ['test2']);

    assert.equal(JSON.stringify(copied), JSON.stringify({test1: 1}));
    //just make sure prototype is defined
    assert.equal(test.test3, 3);
    assert.equal(typeof copied.test3, 'undefined');
  });
});
