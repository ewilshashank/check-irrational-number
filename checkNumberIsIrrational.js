const checkIrrationalNumber = (n) => {

    while(true){
    let sqrt = Math.sqrt(n);
    if(!Number.isInteger(sqrt)){
        return {
            number: sqrt,
            message: "The number is irrational."
          };
    }
    n++;
    }
}

console.log(checkIrrationalNumber(2));
console.log(result.number);
console.log(result.message);
