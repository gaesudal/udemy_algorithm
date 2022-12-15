function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    
    let result = '';
    
    function help(str) {
        
        if(str.length === 0) return;
        
        result += str[str.length-1];
        
        help(str.slice(0,str.length-1));
    }
    
    help(str);
    
    return result;
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  // isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    
    if(str.length <= 1 ) return true;
    
    if(str[0] === str[str.length-1]) return true;
    if(str[0] !== str[str.length-1]) return false;
    
    isPalindrome(str.slice(1,str.length));
  }

  // SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, func){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    if(func(arr[0])) return true;
    return someRecursive(arr.slice(1),func)
  }

  function flatten(arr){
  
    let result = [];
    
    function flattenFunc(flat) {
      // add whatever parameters you deem necessary - good luck!
      for (var v of flat) {
        if (typeof(v) === 'number') {
            result.push(v);
        } else if (typeof(v) === 'object') {
           flattenFunc(v);
        }
          
      }
        
    }
    flattenFunc(arr)
  
      return result;
  }
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]