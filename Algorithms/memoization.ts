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
