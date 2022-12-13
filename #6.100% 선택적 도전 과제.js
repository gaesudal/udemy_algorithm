function sameFrequency(int1, int2){
  let int1Str = int1.toString();
  let int2Str = int2.toString();

  if (int1Str.length !== int2Str.length) {
    return false;
  }

  let arr1Counter = {};

  for (let i = 0; i < int1Str.length; i++) {
    arr1Counter[int1Str[i]] = (arr1Counter[int1Str[i]] || 0) + 1;
  }

  for (let i = 0; i < int2Str.length; i++) {
    if (arr1Counter[int2Str[i]] === undefined || !arr1Counter[int2Str[i]]) {
      return false;
    } else { 
      arr1Counter[int2Str[i]] = arr1Counter[int2Str[i]]--
    }
  }
  return true;
}


function areThereDuplicates(...args) {
  if (args.length === 0 || args.length === 1) {
    return false;
  }

  let resultCounter = {};

  for (let val of args) {
    resultCounter[val] = (resultCounter[val] || 0) + 1;
    if (resultCounter[val] === 2) {
      return true;
    }
  }

  return false;
}

function averagePair(arr, avg){

    if (arr.length === 0 || arr.length === 1) {
      return false;
    }

    let compareNum = avg * 2;
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    while(minIndex != maxIndex && !(minIndex > maxIndex)) {
      let sumNum = arr[minIndex] + arr[maxIndex];
      if (compareNum === sumNum) {
        return true;
      } else if (compareNum > sumNum) {
        minIndex++;
      } else if (compareNum < sumNum) {
        maxIndex--;
      }
    }
    return false;
}

function isSubsequence(arr1, arr2) {
  if (arr1.length > arr2.length) return false;
  if (arr1.length === arr2.length && arr1 === arr2) return true;
  else if (arr1.length === arr2.length && arr1 !== arr2) return false;

  let minArr1Index = 0;
  let maxArr1Index = arr1.length - 1;

  let minArr2Index = 0;
  let maxArr2Index = arr2.length - 1;

  while (!(minArr2Index > maxArr2Index)) {
    if (arr1[minArr1Index] === arr2[minArr2Index]) {
      minArr1Index++;
      minArr2Index++;
    } else if (arr1[minArr1Index] !== arr2[minArr2Index]) {
      minArr2Index++;
    }

    if (arr1[maxArr1Index] === arr2[maxArr2Index]) {
      maxArr1Index--;
      maxArr2Index--;
    } else if (arr1[maxArr1Index !== arr2[maxArr2Index]]) {
      maxArr2Index--;
    }

    if(minArr1Index === maxArr1Index) return true;
  }
  return false;
}

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
      maxSum += arr[i];
  }
  tempSum = maxSum;
  for ( let i = num; i < arr. length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function minSubArrayLen(arr, sum) {
 let tmpSum = 0;
 let result = Infinity;
 let minIndex = 0;
 for (let i = 0; i <arr.length; i++) {
 
  tmpSum += arr[i];

  if (tmpSum >= sum) {
    if (result > i - minIndex){
      result = i - minIndex + 1;
    }
    tmpSum -= arr[minIndex++];
    tmpSum -= arr[i--];
  }

 }


 return result === Infinity ? 0:result;
}

function findLongestSubstring(str){
  if (str.length === 0) {
    return 0;
  }

  let currentStr = '';
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (currentStr.indexOf(str[i]) === -1) {
      currentStr = currentStr.concat(str[i]);
    } else {
      currentStr = currentStr.substring(currentStr.indexOf(str[i])+1).concat(str[i]);
    }
    if (currentStr.length > result) result = currentStr.length;
  }
  return result;
}
