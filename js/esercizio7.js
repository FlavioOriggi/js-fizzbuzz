// Scrivi un programma che stampi i numeri da 1 a 100, 
// ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e 
// per i multipli di 5 stampi "Buzz". 
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz"

// variabile creata per stampare a video
var list = []

// Inizio a controllare dal numero divisibile per 3 & 5, poi per 3 ed infine per 5.
// Se la prima condizione viene messa per ultima (tra quelle di divisione) non verrà letta perche
// ha gia verificato precedentemente i numeri divisibili per 3 o per 5 (credo). 
// Messo alla fine il comando per la stampa, così da stampare i rimanenti 
// numeri non divisibili evitando i doppioni che si creerebbero mettendolo per primo.
for (var i = 1; i <= 100; i++){  
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + 'FizzBazz');
        list.push(i + 'FizzBazz');    
    } else if(i % 5 == 0){
        console.log(i + 'Bazz'); 
        list.push(i + 'Bazz');
    } else if(i % 3 == 0){
        console.log(i + 'Fizz');    
        list.push(i + 'Fizz');
    } else{
        console.log(i); 
        list.push(i);
    }
}

document.getElementById('lista').innerHTML = list;




  