const sum = (a,b) => {
    return a + b
} 
console.log(sum(7,3)) 


function fromDollarToYen ( dolar) {
    const euroToDolar=1.07 
    const euroToYen=156.5 
    const euro= dolar / euroToDolar  
    const yen= euro * euroToYen 
    return parseFloat(yen.toFixed(1)) 
} 

module.exports = { sum, fromDollarToYen }; 

