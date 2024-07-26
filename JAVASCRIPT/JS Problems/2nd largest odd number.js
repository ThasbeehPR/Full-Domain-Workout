arr = [1,23,4,5,6,8,17,42,6,2,13,1,9]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1)
        i--
    }
}

let largest = -Infinity
let seclargest = -Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=seclargest
        seclargest=arr[i]
    }else if(arr[i]>seclargest && arr[i]!=largest){
        seclargest=arr[i]
    }
}

console.log(seclargest);