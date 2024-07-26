const interval = setInterval(()=>{
    console.log('heyy');
},2000)


setTimeout(()=>{
    clearInterval(interval)
},7000)

