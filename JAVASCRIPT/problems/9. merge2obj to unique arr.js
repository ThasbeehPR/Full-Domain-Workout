// merge 2 obj &
// create a new array have have only unique values

const obj1={
    a:10,
    b:20,
    c:30
};

const obj2= {
    d:40,
    e:60,
    f:60
}

const obj = {...obj1,...obj2}           //merg

const arr = Object.values(obj)          //val to arr

const uniqueArr = new Set(arr)          //unique val

// const unArr = Array.from(uniqueArr)  //unique val to convert arr
const unArr = [...uniqueArr]            //unique val to convert arr

console.log(unArr);

