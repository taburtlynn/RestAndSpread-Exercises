// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  // const filterOutOdds = (...args) => 

  //   args.filter(num => num % 2 === 0)

  function findMin(...args){

    return Math.min(...args);
  }

  const findMin = (...args) => Math.min(...args)

  function mergeObjs(obj1, obj2){ return {...obj1,...obj2}}

  const mergeObjs = (obj1,obj2) => {...obj1,...obj2}

  // ??? function doubleAndReturnArgs(arr,...args){

    return [arr,...args];
  }

  /** remove a random element in the items array
and return a new array without that item. */???

function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) { return [...array1,...array2]
}

const extend = (array1,array2) => [...array1,...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return {...obj, [key]:val}
}

const addKeyVal = (obj,key,val) => return {...obj, [key]:val};


/** Return a new object with a key removed. */

function removeKey(obj, key) {
return {}
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}

const combine = (obj1,obj2) => return {{...obj1,...obj2};}


/** Return a new object with a modified key and value. */

function update(obj, key, val) { return {...obj,[key]: val}

}






    
  