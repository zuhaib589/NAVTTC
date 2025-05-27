// let name = "zuhaib";

// console.log();

// // Arithmetic Operators + - * % / **

// a = 36;
// b = 5;

// console.log(a);


// sum

// sum=a+b
// console.log(sum);

// sub 

// sub=a-b
// console.log(sub);  

// mul 

// mul=a*b
// console.log(mul);

// div

// div=a/b
// console.log(div);

//expo

// expo=a**b
// console.log(expo);


// mod 

// mod=a%b
// console.log(mod);

// increment & decrement 


// a = 10
// console.log(a);
// a++
// console.log(a);

// a--
// console.log(a);




// LOOPS

// // FOR LOOP

// let noi="zuhaib";
// for(let i=0; i<noi.length; i++)
//     console.log(i,noi[i]);

// // WHILE LOOP 

// a=0
// while(a<=5){
//     console.log("hello jee");
//     a++
// }


// // DO while

// let x=1

// do{
//     console.log("zuhaib"); 
// }
// while(x==5)
    

// // for of loop best for strings 

// const namee="zuhaib zafar"
// for (let x of namee){
//     console.log(x);
// }

// // for in loop best for objects 

// const object={
//     name:"zain",
//     age:20,
//     city:"FSD"
// }
// for (let x in object){
//     console.log(x ,object[x]);
// }

// let i = 5;

// for (let i = 0; i < 10; i++) {
// 		console.log(i)
// }
// console.log("After loop ");

// console.log(i);

// wen we use variable as var scope it will change globally but when we do it with let it will only work in local/block 



// arr=[1,2,3,"zi"]
// console.log(arr);


// conditional statement 

// var marks = prompt("Write your Number ")

// console.log("You Entered", marks);


// if (marks < 0 || marks > 100) {
//     console.log("Invalid marks");
// }
//  else if (marks < 50) {
//     console.log("Fail");
// } 
// else if (marks >= 50 && marks < 60) {
//     console.log("Grade: D");
// } 
// else if (marks >= 60 && marks < 70) {
//     console.log("Grade: C");
// } 
// else if (marks >= 70 && marks < 80) {
//     console.log("Grade: B");
// }
//  else if (marks >= 80 && marks < 90) {
//     console.log("Grade: A");
// } 
// else if (marks >= 90 && marks <= 100) {
//     console.log("Grade: A+");
// }

// num1=12
// num2=90

// console.log(num1>num2 ? num1 : num2);


// Table using for loop 

// var num = prompt("Enter table number")
// var len = prompt("Enter table length ")

// for (i=1; i <=len; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// var even=0
// var odd = 0
// for(let i = 1; i<=20; i ++){
//     if(i %2 == 0){
//         even = i + even 
//     }
//    else{
//     odd = i + odd
//    }
// }
// console.log(even);
// console.log(odd);

// for( var i=100; i>=1; i--){
// console.log(i);
// }


// *
// **
// ***
// ****
// *****   Design a pattern

// let Staric= "";
// for (let i =5 ; i>=1; i--)
//     {
//         console.log(Staric = Staric + "*"); 
//         console.log(Staric = Staric + "*"); 
//     }


// //  MAP METHOD

    
// const numbers = [65, 44, 12, 4];
// const newAr = numbers.map(myFunction);


// function myFunction(num) {
//   return 
// }
// console.log(newAr);
// console.log(numbers);


              // FILTER METHOD 


// const numbers = [65, 44, 12, 4];
// const newAr = numbers.filter(myFunction);

// function myFunction(num) {
//   return num >40
// }
// console.log(newAr);
// console.log(numbers);

            // FOR EACH 

//  const numbers = [65, 44, 12, 4];
//  const newAr = numbers.forEach(myFunction);
 
//  function myFunction(num) {
//   console.log(num +2 );
   
    
//  }
//  console.log(newAr);
//  console.log(numbers);            
// ......


// console.log("zuhaib");
// console.log("zuhaib");

// console.log("zuhaib");
// console.log("zuhaib");

//  console.log([] ==! []);
//  a=[1,2,3]
//  b=[2]
//  console.log(typeof(a));
 
// Even or Odd Counter in a Range
// 💡 Overview
// The program:
// Asks the user for a starting and ending number.
// Goes through each number in that range.
// Counts how many are even and how many are odd.
// Displays the results.
// ✅ Covers
// ✅ Python syntax
// ✅ Variables
// ✅ Operators (%, +)
// ✅ Conditions (if)
// ✅ Loops (for)

// let startingNumber = 0
// let endingNumber = 120
// let even = 0
// let odd = 0

// for (let i = startingNumber; i <= endingNumber ; i++  ){
//     if(i % 2 == 0 ){
//         even += 1
//     }
//     else{
//         odd += 1
//     }
// }

console.log(`The total number of even from ${startingNumber} to ${endingNumber} are : ${even}`);
console.log(`The total number of odd from ${startingNumber} to ${endingNumber} are : ${odd}`);

// let h1= document.querySelector("h1");
// h1.onclick = ()=>{
//     alert("this is zuhaib")
// }