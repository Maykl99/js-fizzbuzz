/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

//variante 1 utilizzando una variabile locale all'interno del ciclo
/* for(var i=0; i<=100; i++){
    var outPut='';
    if(i % 3 == 0){
        outPut += 'Fizz';
    }
    if(i % 5 == 0){
        outPut += 'Buzz';
    }
    console.log(outPut, i);
}
 */


// variante 2 utilizzando variabili globali
/* var name='Fizz';
var name2='Buzz';
var stampa=null;

for(var i=0; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        stampa=name+name2+ ' ' + i;
    }
    else if(i % 3 ==0){
        stampa = name + ' ' + i;
    }else if(i % 5 ==0){
        stampa = name2 + ' ' + i;
    }else{
       stampa = i;
    }
    console.log(stampa)
} */

// variante 3 utilizzando il ciclo while

var i=0;
while(i<=100){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizzBuzz', i)
    }else if(i % 3 == 0){
        console.log('fizz', i)
    }else if(i % 5 == 0){
        console.log('Buzz', i)
    }else{
        console.log(i)
    }
    i++;
} 
