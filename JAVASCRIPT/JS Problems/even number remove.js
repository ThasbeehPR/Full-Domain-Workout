// revome even numbers

arr = [1,3,5,66,8,9]

for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1)
        i--
    }
}

console.log(arr);