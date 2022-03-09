for (var x=1; x <= 100; x++) {
    if(x % 3 === 0 && x % 5 === 0){
      console.log(x + ' the number is divisible by 3 by 5');
    } else if(x % 5 === 0){
      console.log(x  + ' the number is divisible by 5');
    } else if(x % 3 === 0){
      console.log(x + ' the number is divisible by 3' );
    } else {
      console.log(x + "-----------------------------");
    }
  }