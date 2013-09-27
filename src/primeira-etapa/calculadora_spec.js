describe("Minha calculadora", function() {

  it("um exemplo de especificação", function() {
    expect(true).toBe(true);
  });

  it("a soma 2 + 2 DEVE ser 4", function() {
    expect( Calculadora.somar( 2, 2 ) ).toBe( 4 );
  });

  it("a soma 2 + 2 + 3 + 1 DEVE ser 8", function() {
    expect( Calculadora.somar( 2, 2, 3, 1 ) ).toBe( 8 );
  });

  it("a subtração entre 2 e 2 DEVE ser 0", function() {
    expect( Calculadora.subtrair(2, 2) ).toBe( 0 );
  });

  it("a subtração entre 3 e 4 DEVE ser -1", function() {
    expect( Calculadora.subtrair(3, 4) ).toBe( -1 );
  });

  it("a multiplicação entre 3 e 2 DEVE ser 6", function() {
    expect( Calculadora.multiplicar(3, 2) ).toBe( 6 );
  });

  it("a multiplicação entre 3, 2 e 4 DEVE ser 24", function() {
    expect( Calculadora.multiplicar(3, 2, 4) ).toBe( 24 );
  });

  it("a divisao entre 2 e 2 DEVE ser 1", function() {
    expect( Calculadora.dividir(2, 2) ).toBe( 1 );
  });

  it("a divisao entre 6 e 2 DEVE ser 3", function() {
    expect( Calculadora.dividir(6, 2) ).toBe( 3 );
  });

});
