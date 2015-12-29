var List = require('../lib/list');
var Kernel = require('../lib/kernel');
var SpecialForms = require('../lib/core').SpecialForms;
var expect = require('chai').expect;

describe('List', function(){

  describe('duplicate', function(){
    it('must make a tuple with the value duplicated the specified amount of times', function(){
      let t = List.duplicate("value", 3);

      expect(t.length).to.equal(3);
      expect(t[0]).to.equal("value");
      expect(t[1]).to.equal("value");
      expect(t[2]).to.equal("value");

      t = List.duplicate("value", 0);
      expect(t.length).to.equal(0);
    })
  })

  describe('delete_at', function(){
    it('must delete first item', function(){
      let t = SpecialForms.list(1, 2, 3);
      t = List.delete_at(t, 0);
      expect(t[0]).to.equal(2);
    })
  })

  describe('delete', function(){
    it('delete item in list', function(){
      let t = SpecialForms.list(Symbol.for("a"), Symbol.for("b"), Symbol.for("c"));
      t = List.delete(t, Symbol.for("b"));
      expect(t[1]).to.equal(Symbol.for("c"));
    })
  })

  describe('flatten', function(){
    it('must flatten a list into one list', function(){
      let t = SpecialForms.list(1, SpecialForms.list(2), 3);

      t = List.flatten(t);

      expect(t[0]).to.equal(1);
      expect(t[1]).to.equal(2);
      expect(t[2]).to.equal(3);
    })

    it('must flatten a deeply nested list into one list', function(){
      let t = SpecialForms.list(1, SpecialForms.list(2, SpecialForms.list(4)), 3);

      t = List.flatten(t);

      expect(t[0]).to.equal(1);
      expect(t[1]).to.equal(2);
      expect(t[2]).to.equal(4);
      expect(t[3]).to.equal(3);
    })
  })

  describe('toString', function(){
    it('must display correctly', function(){
      let t = SpecialForms.list(1, 2, 3);
      expect(t.toString()).to.equal('1,2,3');
    })
  })

  describe('destructuring', function(){
    it('destructure into an array', function(){
      let t = SpecialForms.list(1, 2, 3);
      let [a, b, c] = t;
      expect(a).to.equal(1);
      expect(b).to.equal(2);
      expect(c).to.equal(3);
    })
  })
})
