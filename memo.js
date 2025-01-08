function memoization (){
    const cache = {};
    return function (a,b){
        const key = `${a},${b}`;
        if(cache[key] !== undefined){
            console.log("cache")
            return cache[key];
            
        }
        else{
            const result = a + b;
            cache[key] = result;
            console.log("memoization")
            return result;
        }
    }
}

let add = memoization();

console.log(add(1, 2)); 
console.log(add(1, 2));