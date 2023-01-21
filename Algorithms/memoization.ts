//Memoization (Caching)

function memoizedAddTo80(){
  let cache = {};
  return function(n){
    if(!cache[n]){
      console.log('First Time');
      cache[n] = n+80;
    }
    return cache[n]
  }
}

const memoized = memoizedAddTo80();

console.log('1 : ',memoized(5));
console.log('2 : ',memoized(5));


function memoizedFibonacci(){
  let cache = {};
  return function fib(n){
    if(!cache[n]){
      if(n<2){
        return n;
      }else{
        cache[n]=fib(n-1)+fib(n-2);
      }
    }
    return cache[n]
  }
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(400));
