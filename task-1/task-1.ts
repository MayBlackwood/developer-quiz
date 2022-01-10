const printValue = (number: number):void => {
  if(number % 22 === 0) { 
    console.log('candybar');

    return;
  } else if (number % 11 === 0) {
    console.log('bar');

    return;
  } else if (number % 2 === 0) {
    console.log('candy');

    return;
  } 
  
  console.log(number);
  return;
}

// or second variant is below
const printValue2 = (number: number):void => {
  if(number % 2 === 0 && number % 11 === 0) { 
    console.log('candybar');

    return;
  } else if (number % 11 === 0) {
    console.log('bar');

    return;
  } else if (number % 2 === 0) {
    console.log('candy');

    return;
  } 
  
  console.log(number);
  return;
}