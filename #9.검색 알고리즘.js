function linearSearch(arr,val){
    // add whatever parameters you deem necessary - good luck!
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
  }
//linearSearch([10, 15, 20, 25, 30], 15) // 1
//linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
//linearSearch([100], 100) // 0
//linearSearch([1,2,3,4,5], 6) // -1
//linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
//linearSearch([100], 200) // -1


function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
      let lPoint = 0;
      let rPoint = arr.length - 1;
      let mPoint = Math.ceil((lPoint + rPoint)/2);
  
      while(true) {
          if (arr[mPoint] === val) {
              return mPoint;
          } else if (arr[mPoint] > val) {
              rPoint = mPoint
          } else if (arr[mPoint] < val) {
              lPoint = mPoint
          }
  
          if (lPoint >= rPoint) return -1;
  
          mPoint = Math.ceil((lPoint + rPoint)/2);
      }
  }
  //binarySearch([1,2,3,4,5],2) // 1
  //binarySearch([1,2,3,4,5],3) // 2
  //binarySearch([1,2,3,4,5],5) // 4
  //binarySearch([1,2,3,4,5],6) // -1
  //binarySearch([
  //  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  //  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  //], 10) // 2
  //binarySearch([
  //  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  //  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  //], 95) // 16
  //binarySearch([
  //  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  //  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  //], 100) // -1

  function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                break;
            }

            if(j === short.length-1) {
                count++;
            }
        }
    }
    return count;
  }