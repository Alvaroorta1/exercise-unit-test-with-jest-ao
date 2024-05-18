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

function fromEuroToDolar (euro) {
    const euroToDolar=1.07 
    const dolar= euro * euroToDolar
    return parseFloat(dolar.toFixed(1)) 
} 

function fromYenToPound (yen) {
    const euroToYen=156.5
    const euroToPound=0.87
    const euro= yen / euroToYen 
    const pound= euro * euroToPound 
    return parseFloat(pound.toFixed(1)) 
}
module.exports = { sum, fromDollarToYen, fromYenToPound, fromEuroToDolar }; 

