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