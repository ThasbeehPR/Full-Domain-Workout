let arr=[1,3,4,5,7,9]

function isPrime(num){
    if(num<=1){
        return false
    }

    for(let i=2; i*i<=num; i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

let sum=0
for(let i=0; i<arr.length; i++){
   
    if(isPrime(arr[i])){
        console.log(arr[i]);
        // sum+=arr[i]       //sum      
    }
}


// console.log(sum);    //sum


// arr = arr.filter((num)=>isPrime(num))
// console.log(arr);


// // without fn
// arr=[1,2,3,4,5,6,6,7,7,78]

// for(let i=0;i<arr.length;i++){

//     let prime = arr[i]>1

//     for(let j=2; j*j<=arr[i]; j++){
//         if(arr[i]%j==0){
//             prime=false
//             break
//         }
//     }
    
//     if(prime){
//         console.log(arr[i]);
//     }

// }



