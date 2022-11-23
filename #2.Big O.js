// 코드 시간을 비교하기 위한 예제

function addUpTo1 (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpTo2 (n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo2(1000000000)
let t2 = performance.now();
console.log(`Time Elasped: ${(t2-t1) / 1000} seconds.`)

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i ++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n -1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down, Bye!");
}

countUpAndDown(10);

function printAllPairs(n) {
    for (var i = 0; i < n; i+=) {
        for (var j = 0; j < n; j++) {
            console.log(i,j);
        }
    }
}

function logAtLeast5(n) { //O(n)
    for (var i = 1; i<= Math.max(5,n); i++) {
        console.log(i);
    }
}

function logAtMost5(n) { //O(1)
    for (var i = 1; i<= Math.min(5,n); i++) {
        console.log(i);
    }
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
}