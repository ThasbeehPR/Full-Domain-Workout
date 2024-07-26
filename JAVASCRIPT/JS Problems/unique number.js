arr = [1,2,2,3,5,7,3,9,5,4]
let arr1=[]

for(let i=0;i<arr.length; i++){
   let isUnique=true
    for(j=0;j<arr.length;j++){
       if(i!=j && arr[i]==arr[j]){
       isUnique=false
       }
    }
    if(isUnique){
    arr1.push(arr[i])
    }
}

console.log(arr1);

// for(j=0;j<arr.length;j++)     //only unique
// for(j=i+1;j<arr.length;j++)   //print all number without duplicate      //j=i+1

//method 2
const unArr= Array.from( new Set(arr) )
console.log(unArr);




