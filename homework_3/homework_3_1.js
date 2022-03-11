/*
There is a JSON file with a price list. All prices there are in dollars. You need to:
1 - convert all prices to euros (use a static exchange rate).
2 - add a currency field to the source and output objects
3 - save both objects into variables and log them into the console.
fetch("test.json")
  .then(response => response.json())
  .then(json => console.log(json));
*/
import fetch from 'node-fetch';

const response = await fetch('https://api.github.com/users/github');
const data = await response.json();

console.log(data);

