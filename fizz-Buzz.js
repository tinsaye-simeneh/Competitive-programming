var fizzBuzz = function(n) {
    let res = []; // empty array of the results
    let line = ""; // temp value that holds the current index's value before push
    n++; // removes need to also check for == case
    for(var i = 1; i < n; i++) {
      if(i % 3 == 0) {
        line = "Fizz";
        if(i % 5 == 0) {
          line += "Buzz";
        }
      } else if (i % 5 == 0) {
        line = "Buzz";
      } else {
        line = i.toString();
      }
        res.push(line);
    }
      
    return res;
};
