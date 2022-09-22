//1

/*

var ps = require("prompt-sync");
var prompt = ps();

let number = parseInt(prompt("Give number: "))

let inter1=prompt("Give first interval: ")
let inter2=prompt("Give second interval: ")

if (((number > inter1) && (number < inter2)) ||  ((number < inter1) && (number > inter2))){

    //console.log("within interval")
}
else{
    //console.log("Not within interval")
}
*/

//2
/*
var ps = require("prompt-sync");
var prompt = ps();

let year = prompt("Write a year: ")
function leapyear(year){
    if ((0 == year %4) && (0 != year % 100) || (0 == year % 400)){
        console.log(year + " is a leap year");
    }else {
        console.log(year + " is not a leap year")
    }
}
leapyear(year); 
*/

//4
/*
var ps = require("prompt-sync");
var prompt = ps();

let num1 = prompt("Give me a number: ")
let num2 = prompt("Give me another: ")
let num3 = prompt("Give me one more: ")

function greatestnumber(num1,num2,num3){
    if((num1>num2) && (num1>num3)){
        console.log(num1 + " is the greatest number of those")
    }else if ((num2>num1) && (num2>num3)){
        //console.log(num2 + " is the greatest number of those")
    } else {
        console.log(num3 + " is the greatest number of those")
    }
}
greatestnumber(num1,num2,num3);
*/

//5
/*
var ps = require("prompt-sync");
var prompt = ps();

let num1 = prompt("Give me a number: ")
let num2 = prompt("Give me another: ")
let num3 = prompt("Give me one more: ")

function sortnumber(num1,num2,num3){
    if((num1>num2) && (num2>num3)){
       console.log("The oder is " + num1 + num2 + num3)
    }
    else if((num1>num2) && (num3>num2)){
        console.log("The oder is " + num1 + num3 + num2)
    }else if ((num2>num1) && (num1>num3)){
        console.log("The oder is " + num2 + num1 + num3)
    }else if ((num2>num3) && (num3>num1)){
        console.log("The oder is " + num2 + num3 + num1)
    }else if ((num3>num1) && (num1>num2)){
       console.log("The oder is " + num3 + num1 + num2)
    }else {
        console.log("The oder is " + num3 + num2 + num1)
    }
}
sortnumber(num1,num2,num3)
*/

//6
/*
var ps = require("prompt-sync");
var prompt = ps();

let num1 = prompt("Give me a number: ")
let num2 = prompt("Give me another: ")
let num3 = prompt("Give me one more: ")

function goupordown(num1,num2,num3){
    if((num1>num2) && (num2>num3)){
        console.log("decrease")
    }else if((num3>num2) && (num2>num1)){
        console.log("increase")
    }else{
        console.log("neither")
    }
}
goupordown(num1,num2,num3)
*/

// 1

/*
var ps = require("prompt-sync");
var prompt = ps();

let bert = parseInt(prompt("Give me a number: "))

function plusminus(bert){

if(bert>0){
    console.log("It is posetive")

}else if(bert<0){
    console.log("It is negative")
}else{
   console.log("It is 0")
}

}
plusminus(bert)
*/


// 2

/*
var ps = require("prompt-sync");
var prompt = ps();


let hum = prompt("Give me a symbol: ")

if (hum == "a"){
   console.log("Letter")
}else if (hum == "b"){
    console.log("Letter")
 }else if (hum == "c"){
    console.log("Letter")
 }else if (hum == "d"){
    console.log("Letter")
 }else if (hum == "e"){
    console.log("Letter")
}else if (hum == "f"){
    console.log("Letter")
 }else if (hum == "g"){
    console.log("Letter")
 }else if (hum == "h"){
    console.log("Letter")
 }else if (hum == "i"){
    console.log("Letter")
 }else if (hum == "j"){
    console.log("Letter")
 }else if (hum == "k"){
    console.log("Letter")
 }else if (hum == "l"){
    console.log("Letter")
 }
 
 else{
   console.log ("not a letter")
 }
 */

 //3
/*
 var ps = require("prompt-sync");
var prompt = ps();


let letter = prompt("Ge mig en bokstav: ")

if(letter == "a"){
   console.log("De e en vokal")
}else if (letter == "o"){
   console.log("De e en vokal")
}else if (letter == "u"){
   console.log("De e en vokal")
}else if (letter == "å"){
   console.log("De e en vokal")
}else if (letter == "e"){
   console.log("De e en vokal")
}else if (letter == "i"){
   console.log("De e en vokal")
}else if (letter == "y"){
   console.log("De e en vokal")
}else if (letter == "ä"){
   console.log("De e en vokal")
}else if (letter == "ö"){
   console.log("De e en vokal")
}else{
   console.log("De e en konsonat")
}
*/

// 4
/*
var ps = require("prompt-sync");
var prompt = ps();

let num1 = parseInt(prompt("Numeber plz: "))
let num2 = parseInt(prompt("Numeber plz: "))
let num3 = parseInt(prompt("Numeber plz: "))

if(num1 + num2 + num3 === 180){
   console.log("It's a triangle")
}else{
   console.log("Not triangle")
}
*/

// 6

/*
var ps = require("prompt-sync");
var prompt = ps();

let num = parseInt(prompt("Ge mig nummer: "))


if((num % 2 == 0)){
   console.log("De e jämnt")
}else {
   console.log("De e udda")
}
*/