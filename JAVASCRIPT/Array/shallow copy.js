//deep copy 

let arr = [1,2,3,4,5,[6,7],8]

arr1=[...arr]

arr1[2]=7       //change arr1 not in arr2
arr1[5][1]=9    //change arr1 also in arr2


console.log(arr);
console.log(arr1);