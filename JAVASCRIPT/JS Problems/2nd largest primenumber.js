arr = [1,23,4,5,6,8,17,42,6,2,13,1,9]

function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false
        }
    }return true
}

for(let i=0;i<arr.length;i++){
    if(isPrime(arr[i])==0){
        arr.splice(i,1)
        i--
    }
}

console.log(arr);


const result = arr.reduce((acc,val)=>{
    if(val>acc.max){
        acc.max=acc.sec
        acc.sec=val
    }else if(val>acc.sec && val!=acc.max){
        acc.sec=val
    }
return acc
},{max:-Infinity,sec:-Infinity})

console.log(result.sec);