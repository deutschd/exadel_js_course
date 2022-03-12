/*
There is a JSON file with a price list. All prices there are in dollars. You need to:
1 - convert all prices to euros (use a static exchange rate).
2 - add a currency field to the source and output objects
3 - save both objects into variables and log them into the console.
fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json));
*/
const jsonData= require('./task1-data.json'); 
console.log(jsonData);

const USD_Formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const EURO_Formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR'
})

formatter1.price.format(2500); /* $2,500.00 */