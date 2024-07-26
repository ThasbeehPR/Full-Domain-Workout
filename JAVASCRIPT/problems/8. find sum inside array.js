//find sum of inside the array (5+4+3+3+2)

const obj = {
    a:[5,4,3],
    b:8,
    c:4,
    d:[3,2]
}

const arr = Object.values(obj)
            .flat()
            .reduce((sum,val)=>{
                return sum+=val
              })
              
console.log(arr);

