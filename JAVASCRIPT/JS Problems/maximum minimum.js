arr=[11,22,3,2,5,6,7,9,8]

// maximum & min
let largest = -Infinity   
let smallest = Infinity              
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }else if(arr[i]<smallest){
        smallest=arr[i]
    }
}
console.log(`Largest : ${largest} , Smallest : ${smallest}`);

//reduce method
const result = arr.reduce((acc,val)=>{  
        if(val>acc.max){
            acc.max=val
        }else if(val<acc.min){
            acc.min=val
        }  
        return acc
},{max:-Infinity,min:Infinity})

console.log(result);

