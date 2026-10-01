function memoize(fn) {
    const cache= new Map();
    return function(...args){
        let key= JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        const result= fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}
const add = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));