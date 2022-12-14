// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){
    if (num2 === 0) return 1;
    
    return num1 * power(num1, --num2);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){
    if (num2 === 0) return 1;
    
    return num1 * power(num1, --num2);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    let result = 1;
    
    function product (arr) {
        if (arr.length === 0) return 1;
        if (arr[0] === 0) return result *= 0;
        result *= arr[0];
 
        return product(arr.slice(1));
    }
    
    product(arr);
    
    return result;
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   
    if (num === 0) return 0;
    
    return num + recursiveRange(--num);
 }
 
 // fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  
    let result = 0;
  
    function sumFib(num) {
        
        if (num === 1) return 1;
        if (num === 2) return 1;
        
        return sumFib(--num) + sumFib(--num) 
    }
    
    result = sumFib(num);
  
    return result;
    
  }