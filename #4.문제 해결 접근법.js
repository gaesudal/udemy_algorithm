// Write a function which takes two numbers and returns their sum.

// 1. Can I restate the problem in my own words? "implement addition"
// 2. What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are a part of the problem?



// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a:4}
charCount("hello") // {h:1, e:1, l:2, o:1}

"my phone number is 182763" // count blank?
"Hello hi" // count lower case, upper case?

charCount("") // return null? undefined?

function charCount(str) {
    // do something
    // retrun an object with keys that are lowercase alphanumeric characters in the string; values should be the counts ofr those characters
}

function charCount(str) {
    // make object to return at end
    // loop over string, for each character...
        //if the char is a number/letter AND is a key in onject, add one to count
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        //if character is something else (space, period, etc.) don't do anything
    // return object at end
}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for (var i = 0; i < str.length; i ++) {
        var char = str[i].toLowerCase();
        //if the char is a number/letter AND is a key in onject, add one to count
        if (result[char] > 0) {
            result[char]++;
        } 
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }
        //if character is something else (space, period, etc.) don't do anything
    // return object at end
}

// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

function charCount(str) {
    let obj = {};
    for (var char of str) {
        // if(/[a-z0-9]/.test(char)) {
        //     obj[char] = ++obj[char] || 1;
        // }

        if (isAlphaNumberic(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }


    }
    return obj;
}

function isAlphaNumberic(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numberic (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code <123)) { // upper alpha (A-Z)
            return false;
        }
    return true;
}