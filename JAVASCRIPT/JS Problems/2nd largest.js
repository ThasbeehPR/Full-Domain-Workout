const arr = [1, 2, 8, 4, 5, 6, 7, 8];

let largest= -Infinity
let secondLargest = -Infinity

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest=secondLargest
        secondLargest=arr[i]
    }else if(arr[i]>secondLargest && arr[i]!==largest){
        secondLargest=arr[i]
    }
}
console.log(secondLargest);










// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;  // Update second largest before updating largest
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(secondLargest); // Output: 8