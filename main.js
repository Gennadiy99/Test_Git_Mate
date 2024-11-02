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
  return countGuests;
}
console.log(calculateGuests('we would like to book for 3 people'));