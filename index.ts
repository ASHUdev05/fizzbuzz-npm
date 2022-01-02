export = function tiny(number1 : number, number2 : number) {
    if (typeof number1 !== "number" || typeof number2 !== "number") throw new TypeError("A number is expected! :D");
    var res = new Array((number2 - number1 +1));
    for (let i = number1, j=0; j<res.length; i++,j++) {
      if(i%15 == 0)
      res[j] = "FizzBuzz"
      else if(i%3 == 0)
      res[j] = "Fizz"
      else if(i%5 == 0)
      res[j] = "Buzz"
      else
      res[j] = i.toString()
    }
    for (let i=0;i<res.length;i++){
    console.log(res[i] + "\n");
    }
    };