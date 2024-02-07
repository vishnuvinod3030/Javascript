var loanAmount=200000;

var interestRate=9;

var tenure=20; //years

var p=loanAmount
var r=interestRate/12 //monthly interest
var i=r/100
var n=tenure*12//month

var onePlusi=(1+i)**n
var EMI=(p*i*onePlusi)/(onePlusi-1)
//console.log(EMI); //(evide 1799.451911)
console.log(Math.round(EMI))

//monthly Emi

//emi=(p*i*(1+i)^n)/(1+i)^n-1

