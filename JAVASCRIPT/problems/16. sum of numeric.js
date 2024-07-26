//find sum of numeric numbers in this object

let obj = {a:{b:1,c:2},d:3}

let sum=0
for(let key in obj){
    if(typeof obj[key] == 'number'){
        sum+=obj[key]
    }
    else{

        for(let nestedKey in obj[key]){
            if(typeof obj[key][nestedKey] == 'number'){
                sum+=obj[key][nestedKey]
            }
        }
        
    }
}

console.log(sum);

