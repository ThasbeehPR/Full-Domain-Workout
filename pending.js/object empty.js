// throw an error if object passed to the function is empty

function objCheck(obj){
    if(Object.keys(obj).length==0 && obj.constructor==Object){
        throw new Error('object is empty');
    }else{
        console.log('not empty');
    }

}


const obj={a:1}
const obj1={}

objCheck(obj)
objCheck(obj1)