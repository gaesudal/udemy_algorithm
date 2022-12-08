function same(arr1, arr2) { // native
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // 해당 파라미터와 같은 값의 배열 index를 찾음
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1); // 특정 범위 삭제
    }
    return true;
}

function sameRefactored(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

function sumZero (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

function sumZeroRefactored (arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else if (sum > 0) {
            left++;
        }
    }
}

function maxSubarraySum (arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num ; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        return max;
    }
}

function maxSubarraySumRefactor (arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    for ( let i = num; i < arr. length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSubarraySum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
        return -1
    }
}

function searchRefactor(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        
        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}