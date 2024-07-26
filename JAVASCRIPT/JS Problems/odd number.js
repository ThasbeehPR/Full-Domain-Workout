arr = [1,3,4,5,6,7]

// method 1
arr = [1,3,5,66,8,9]

for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1)
        i--
    }
}

console.log(arr);

//method 2

function odd(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

const result = odd(arr)
console.log(result);


//method 3

function odd(arr){
   return arr.filter((val)=>val%2!==0)
}

const result2 = odd(arr)

console.log(result2);



