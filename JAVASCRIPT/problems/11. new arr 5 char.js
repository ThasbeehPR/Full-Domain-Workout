//create a new array that contain the element that only have more 5 char

arr = ['Hello', 'Hai', 'Javascript', 'Bootstrap']

arr1 = arr.filter((val)=>{
  return  val.length>5
})

console.log(arr1);