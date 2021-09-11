function doSomething (){
    for (let i=0; i<5; i++){
        console.log(i)
    }
    console.log('Finally' + i)
}

doSomething()

// types

let count = 5;
count = 'a' //this in not right

let a: number ;
let b: boolean;

// and so on

// now see enum type 

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{Red=0, Greeen=1, Blue=2};
let BackgroundColor= Color.Red

// type assertion

let message;
message='abc';

// two ways
let endWithC= (<String>message).endsWith('c');
let alternateC= (message as string).endsWith('c');

// arrow function

let log= function (message){
    console.log(message);
}

let doLog=(message)=>console.log(message);