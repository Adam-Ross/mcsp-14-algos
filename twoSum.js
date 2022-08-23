

// O(n^2) brute-force solution
// function twoSum(sum) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === sum) {
//                 return true
//             }
//         }
//     }
//     return false
// }   

// console.log(twoSum(9))

// Find a solution that uses only ONE for loop. This will make this an O(n) / linear runtime.
// function twoSum(sum) {
//     const pastNumbers = {}
//     let neededNumber, current
//     for(let i = 0; i < arr.length; i++) {
//         current = arr[i]
//         neededNumber = sum - current
//         if(pastNumbers[neededNumber]) {
//             return true
//         } else {
//             pastNumbers[current] = true
//         }
//     }
//     return false
// }

// console.log(twoSum(9))

const arr = [1,2,3,4,5,6,7,8,9]

function twoSum(sum) {
    const pastNumbers = []
    let current, neededNumber
    for(let i = 0; i < arr.length; i++) {
        current = arr[i]
        neededNumber = sum - current
        if(!pastNumbers.includes(neededNumber)) {
            pastNumbers.push(current)
        } else {
            return true
        }
    }
    return false
}

console.log(twoSum(9999))