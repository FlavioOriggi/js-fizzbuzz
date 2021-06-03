// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e 
// per i multipli di 5 stampi "Buzz". 
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"

var list = []

for (var i = 1; i <= 100; i++){  
    if(i % 3 == 0){
        console.log(i + 'Fizz');    
        list.push(i + 'Fizz');
    } else if(i % 5 == 0){
        console.log(i + 'Bazz'); 
        list.push(i + 'Bazz');
    } else if(i % 3 == 0 && i % 5 == 0){
        console.log(i + 'FizzBazz');
        list.push(i + 'FizzBazz');
    } else{
        console.log(i); 
        list.push(i);
    }
}

document.getElementById('lista').innerHTML = list;




  