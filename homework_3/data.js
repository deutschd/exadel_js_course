const fs = require('fs');
const fileName = './file.json';
const file = require(fileName);

const convertToEuro = (usd) => {
    return usd * 1.09;
}

file.map(function(e) {
    e.price_euro = convertToEuro(e.price_usd);
    return e
});

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});