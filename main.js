
function calculateGuests(guestsInput) {
  if (guestsInput.length === 0) {
    return "not a number";
  }

  let countGuests = "";

  for (const i of guestsInput) {
    if (Number(i) ) {
      countGuests += i;
    } else if (countGuests) {
      break;
    }
  }

  if (countGuests === "" || /^0+$/.test(countGuests)) {
    return "not a number";
  }
  countGuests = parseInt(countGuests, 10);
  return `Количество гостей: ${countGuests}`;
}
console.log(calculateGuests("we would like to book for 3 people"));
console.log(calculateGuests("I think 5 guests"));
console.log(calculateGuests("Big company of 15 dudes"));
console.log(calculateGuests("5"));
console.log(calculateGuests("alone"));
console.log(calculateGuests("0"));
console.log(calculateGuests("Hello, 9.75 people"));
console.log(calculateGuests("There will be 7 or 9 guys"));
console.log(
  calculateGuests("hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk")
);
console.log(calculateGuests('\t \n      1 person'));
console.log(calculateGuests('11 people'));

// function isJumping(n) {
//   if(n < 0){
//     return 'Отрицательное число';
//   }

//   let str = String(n);
//   // let str = parseInt(n, 10);

//   for(let i = 0; i < str.length - 1; i++){

//     if(!(+str[i]+1 === +str[i+1] || +str[i]-1 === +str[i+1])){
//       return 'NOT JUMPING';
//     }
//   }
//   return 'JUMPING';
// }

// console.log(isJumping(0123));
