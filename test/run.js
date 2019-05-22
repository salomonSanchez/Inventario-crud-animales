
const expect = require('chai').expect;
const sum = require('./sum.js').multiplyNumbers;
const suma = require('./sum.js').sumar;

describe("multiplicacion", () => {
  it('multiplicacion de entros', () => {
    expect(sum(1, 2)).to.eql(2);
  });
});

describe("suma", () => {
  it('suma de entros', () => {
    expect(suma(1, 2)).to.eql(3);
  });
});

//funciones de la app
var consultas = require('../acceso a datos/consultas');
describe('true or false', () => {
  it('true is true', () => {
    expect(consultas.traerDatos=true).to.eql(true);
  });

  it('false is false', () => {
    expect(false).to.eql(false);
  });
});