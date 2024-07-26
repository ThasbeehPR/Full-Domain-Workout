arr=[11,22,3,2,5,6,7,9,8]

// maximum
let largest = -Infinity                 
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest);
console.log(Math.max(...arr));  //max method

//minimum
let smallest = Infinity                 
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}
console.log(smallest);
console.log(Math.min(...arr));  //min method