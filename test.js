
const { sum, fromDollarToYen, fromYenToPound, fromEuroToDolar } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9); 
    expect(total).toBe(23);
}) 
test('1 dolar tiene que ser 146,3 yenes', () => {
    let yenes = fromDollarToYen(1); 
    expect(yenes).toBe(146.3);
}) 
test('10 euros tiene que ser 10.7 dolar', () => {
    let dolar = fromEuroToDolar(10); 
    expect(dolar).toBe(10.7);
}) 
test('1565 yenes tiene que ser 8.7 pounds', () => {
    let pounds = fromYenToPound(1565); 
    expect(pounds).toBe(8.7);
}) 