//palindrome

let str = 'malayalam'

let lowStr = str.toUpperCase()

let rev = lowStr.split('').reverse().join('')

if(rev == lowStr){
    console.log('palindrome');
}else{
    console.log('not palindrome');
}
