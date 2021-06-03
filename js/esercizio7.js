// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e 
// per i multipli di 5 stampi "Buzz". 
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"

var numero = [];

for (var i = 0; i < 101; i++){  
    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById('som').innerHTML = (i + 'FizzBuzz' + '<br>');             
    }  
    if(i % 3 == 0){
        document.getElementById('som').innerHTML = (i + 'fizz' + '<br>');       
    } 

    if(i % 5 == 0){
        document.getElementById('som').innerHTML = (i + 'buzz' + '<br>');         
    } 

    document.getElementById('som').innerHTML = (i + '<br>'); 
    
    

}



  