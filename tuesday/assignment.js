let num = parsInt(prompt('Enter a number you would like factorialized: '))

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  console.log(factorialize(num))