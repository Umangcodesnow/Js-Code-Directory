//window.alert("I Really Love Success");
//gives an alert on windows by  button

// let fName = "Umang";
// let age = 21;
// let student = true;


// console.log("My name is" , fName ,"Gupta");
// console.log("And I'm ",age, "years old");
// console.log("am i a student",student);

// //if I want to change the innerhtml element
// document.getElementById("rat").innerHTML ="Hello " + fName;
// document.getElementById("p2").innerHTML = age + "And I also love Success";

//How to accept user  input
//easy way
 
//let userName = window.prompt("What's your username?");
//console.log(userName); // Easy method
//difficult method


//first we create html 16-18 then
// let userName;

// document.getElementById("mybutton").onclick = function() {
//     userName = document.getElementById("myText").value;
//     document.getElementById("myLabel").innerHTML = "Hello " + userName;
// }

//type conversion: converting one data type tp nother

// let age = window.prompt("How old are You?");

// age = Number(age); //converting age into a number
// age += 1; //by default this age is string 1

// console.log("Happy Birthday! You Are", age,"Years old");

// let x;
// let y;
// let z;

// // x = 39; //if we were to convert a number then 
// // y = 3.14; // /if we were to convert a number then
// // z =  "";  //if we were to convert an empty string then

// x = Number(39);
// y = String(3.14);
// z = Boolean("") // empty will retuen false and something written will give true



// //to check its types
// console.log(x, typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//Use of const where we do not want to change our value
//const Var are always Caitalised
// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius");
// radius= Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);
// let a;
// let x = 3.14566;
// let y = 5;
// let k = 4;
// let maximum ;
// let minimum ;


// x = Math.round(x); //round it off
// x = Math.floor(x); //removes decimal
// x = Math.ceil(x);
// x = Math.pow(x ,2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x,y,k);
// minimum = Math.min(x,y,k);

// a = Math.PI;
// console.log(x);

//Find the hypotenuse   
//00:38:58
//esymethod
// leta;
// letb;
// letc;


// a=window.prompt("Enter sideA");
// a=Number(a);
// bwindow.prompt("Enter sideB");
// b=Number(b);
//    Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("SideC:",c);



// //difficult method
// a = window.prompt("Enter side A");
// a = Number(a);
// b =window.prompt("Enter side B");
// b =Number(b);
// C = Math.sqrt(Math.pow(a, 2)+Math.pow (b, 2));
// console. log ("Side C;", c);
// document.getElementById("submitButton ").onclick = function (){
// a - document.getElementById("aText Box ").value
// Number (a)
// a
// b= document.getElementById("bText Box").value;
// b =Number (b) ;
// c = Math.sqrt(Math.pow (a, 2) + Math.pow(b, 2));
// document.getElementById("cLabel").innerHTML = "Side C: " +Cj

//Template Literals
 
let word1 = 'Umang ';
let word2 = ' Gupta';
let num1=2;
let num2=3;
let example = `${num1+num2} 

 ${word1 +" "+ word2}`;

//const fullName = `${num1 + num2}   ${word1} ${word2}`;

console.log(example);
document.getElementById('exz').innerHTML = example;


































































































