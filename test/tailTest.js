const tail = require('../tail');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});


//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertArraysEqual(result, ["Lighthouse", "Labs"]); // => PASS!
