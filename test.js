const { sum, fromDollarToYen } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9); 
    expect(total).toBe(23);
}) 
test('1 dolar tiene que ser 146,3 yenes', () => {
    let yenes = fromDollarToYen(1); 
    expect(yenes).toBe(146.3);
})