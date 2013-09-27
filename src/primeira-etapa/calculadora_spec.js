describe("Minha calculadora", function() {

  it("um exemplo de especificação", function() {
    expect(true).toBe(true);
  });

  it("a soma 2 + 2 DEVE ser 4", function() {
    expect( Calculadora.soma( 2, 2 ) ).toBe( 4 );
  });

});
