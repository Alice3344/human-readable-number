const a = {

  0: 'zero',

  1: 'one',

  2: 'two',

  3: 'three',

  4: 'four',

  5: 'five',

  6: 'six',

  7: 'seven',

  8: 'eight',

  9: 'nine',

  10: 'ten',

  11: 'eleven',

  12: 'twelve',

  13: 'thirteen',

  14: 'fourteen',

  15: 'fifteen',

  16: 'sixteen',

  17: 'seventeen',

  18: 'eighteen',

  19: 'nineteen',

};

 

const b = {

 20: 'twenty',

 30: 'thirty',

 40: 'forty',

 50: 'fifty',

 60: 'sixty',

 70: 'seventy',

 80: 'eighty',

 90: 'ninety',

};

 

module.exports = function toReadable (number) {

 if( number < 20 ) {

   result = a[number];

 }

 

  if( number >= 20 && number < 100 ) {

     result = number % 10 === 0  ? b[number] : b[(Math.floor(number / 10)) * 10] + ' ' + a[(number  - (Math.floor(number / 10)) * 10)]

 }

 

 

  if (number >= 100 && number < 1000) {

    if(number % 100 === 0 )   { result = a[Math.floor(number / 100)] + ' hundred';

    } else {

      let num = number - ( Math.floor(number / 100) * 100);

      result = a[Math.floor(number / 100)] + ' hundred' + ' ' + toReadable(num);

  }}

  return result;

};
