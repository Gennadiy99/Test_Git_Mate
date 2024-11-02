function calculateGuests(guestsInput) {
  let countGuests = '';
  
  for (const i of guestsInput){
    if(i === '0'){
      return 'not a number';
    }    
    if(!isNaN(i) && i !== ' '){
      countGuests += i;
    } else if(countGuests){
      break;
    }
  }

  if(countGuests === ''){
    return 'not a number';
  }
  countGuests = parseInt(countGuests, 10);
  return `Количество гостей: ${countGuests}`;
}
console.log(calculateGuests('we would like to book for 3 people'));
console.log(calculateGuests('I think 5 guests'));
console.log(calculateGuests('Big company of 15 dudes'));
console.log(calculateGuests('5'));
console.log(calculateGuests('alone'));
console.log(calculateGuests('0'));
console.log(calculateGuests('Hello, 9.75 people'));
console.log(calculateGuests('There will be 7 or 9 guys'));
console.log(calculateGuests('hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk'));

