async function fun(){
    try {
        let response= await fetch('https://api.example.com/data')  
         console.log(data=response.JSON);
    } catch (error) {
        console.error('Error occured');
    }
}