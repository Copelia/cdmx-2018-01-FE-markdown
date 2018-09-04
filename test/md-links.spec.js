
//  Probar función
const { mdLinks } = require('../index.js');


describe('mdLinks', () =>{
  test('mdLinks debería ser una función', () =>{
    expect(typeof mdLinks(readingFunction)).toEqual('function');
  });
});

test('the data has arrived', done => {
  function mdLinks(data) {
    expect(data).toBe('???');
    done();
  };
});