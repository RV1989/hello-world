var chai = require('chai'), expect = chai.expect, should = chai.should();

var hello = require( '../index.js');

describe('HelloWorld', function(){
  it('#Hello shoud be string', function(){
    hello.hello("Rien").should.be.a('string');

    });
  it('#Hello shoud be return', function(){
        hello.hello("Rien").should.equal('Hello Rien')

    });

  it('#hello should return string with numbers',function(){
    expect(hello.hello(1258)).to.be.a('string')

  });

});
