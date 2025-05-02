        // 1) Write a program to check if a number is positive, negative, or zero.

// let num=prompt("Enter Number : ")

// if (num > 0 ){
//     console.log("Number is postive ")
// }
// else if (num < 0) {
//     console.log("Number is Negative ")
// }
//  else {
//     console.log("Number is Zero ")
// }

        // 2) Write a program to check if a number is even or odd.

// let num = prompt("Enter Number : ")
// let res = num % 2 == 0 ? "Number is Even" : "Number is Odd"
// console.log(res)

        // 3) Write a program to find the largest of three numbers.

// let a = -10
// let b = -4
// let c = -100

// if( a > b && a > c){
//     console.log("Number 1 is largest", a)
// }
// else if (b > a && b> c ){
//     console.log("Number 2 is largest ",b);
// }
// else{
//     console.log("Number 3 is largest ",c);
// }

        // 4) Write a program to assign a grade based on marks obtained:[Use Switch Statement]

// A for marks >= 90
// B for marks >= 80
// C for marks >= 70
// D for marks >= 60
// F for marks < 60

// let num= prompt("Enter Number : ")

// if (num < 0 || num > 100 ){
//    console.log("Please Write correct number (0-100)  ")
//    }
// else if (num >= 90) {
//    console.log("You Got A Grade Congrats!! ")
//    }
// else if (num >=80 && num <90) {
//    console.log("You Got A Grade Congrats!! ")
//    }
// else if (num >=70 && num <80) {
//     console.log("You Got C Grade Congrats!! ")
//     }
// else if (num >=60 && num <70) {
//         console.log("You Got D Grade Congrats!! ")
//         }
//  else{
//     console.log("you failed !!");

//  }

        // 5) Write a program to check if a given character is a vowel or a consonant.

// let chara = prompt("Please enter a character ").toLowerCase();

// if (chara.length !== 1 || /^[0-9]$/.test(chara)) {
//   console.log("Please write single Alphabet character !!");
// } else if (
//   chara == "a" ||
//   chara == "e" ||
//   chara == "i" ||
//   chara == "o" ||
//   chara == "u"
// ) {
//   console.log("The given character is vowel");
// } else {
//   console.log("consonant");
// }

        // 6) Write a program to check if a person is eligible to vote based on their age (must be 18 or older).

// let age=prompt("Enter Your age : ")       

// let res = (age >= 18)? "Eligible to vote" : "Not Eligible to vote"
// console.log(res);

        //7) Write a program to check if a given number is a multiple of 5.[Value Getting from Prompt].

// let num=prompt("Enter Number : ")
// let res = (num % 5 == 0)? "Multiple of 5 ": " Not a Multilple of 5";
// console.log(res);

        //8) Write a program to check if a given character is an uppercase letter, lowercase letter, digit, or a special character.


// let char = prompt("Enter a single character:");

// if ( char.length !== 1) {
//     console.log("Please enter exactly one character.");
// } else if (/[A-Z]/.test(char)) {
//     console.log("Uppercase letter");
// } else if (/[a-z]/.test(char)) {
//     console.log("Lowercase letter");
// } else if (/[0-9]/.test(char)) {
//     console.log("Digit");
// } else {
//     console.log("Special character");
// }


        // 9) Write a program to print numbers from 10 to 1 Reverse Order using a while loop.

 
// let num=10

// while(num > 0){
//     console.log(num);
//     num--    
// }    

        // 10) Write a program to print the first 10 even numbers using a while loop.
 
// var num=0
//         while (num <= 20){
//            if(num %2 == 0){
//                 console.log(num);       
//            }  
//            num++      
//         }


        // 11) Write a program to find the sum of the first 10 natural numbers using a while loo        

//    let num = 1  
//    var count = 0 
//    while(num <=10){
//         count = count + num 
//         num ++
//    }
//    console.log("The sum of first ten natural number is =",count);
   

        // 12) Write a program to print the sum of all odd numbers between 1 and 50 using a while loop.

// let num=0
// var sum=0
// while(num<=50){
//         if(num %2 != 0){
//               sum = sum + num  
//         }
//         num++
// }
// console.log("The sum of odd number between 1 to 50 is =", sum);


        // 13) Write a program to count the number of vowels in a given string using a while loop.

// let str="Hi my name is zuhaib zafar"
// let x=0
// let count =0
// while (x < str.length){
//         if(/[aeiou]/i.test(str[x])){
//                 count++
//         }
//      x++   
// }
// console.log(`The total number of vowels in your string [${str}] is:`,count);


/* --------------------- Combined Concept (Operatore + IF-Else + For Loop)---------------------*/

        // 14) Write a program to find the sum of all even numbers between 1 and 100 using a while loop.

// let i =0
// let sum=0
// while(i <= 100){
//         if(i %2 == 0){
//                 sum +=i
//         }
//        i++ 
// }console.log(sum);


        // 15)Write a program to count the number of digits in a given number using a while loop.

//  let num=1234
//  let count=0

// if (num === 0){
//         count=1
// }
// else{   
//         while (num > 0 ){
//            num = parseInt(num/10)
//            count++      
// }

// }
// console.log("The number of digit in given number is :" , count );




        //16) Write a program to check if a given number is a palindrome using a while loop and if-else statements.

// let str="mom"
// let str1=""
// let i = str.length-1
// while(i >=  0 ){
//         str1 += str[i]
//         i--
// }
//  if(str1 === str){
//         console.log("Yes the given string is palindrome " , str1); 
//  }else{
//         console.log("No the given string is not palindrome " , str1); 
//  }
 

        // 17) Write a program to print the reverse of a string using a while loop.


// let str="zuhaib"
// let str1=""
// let i = str.length-1
// while(i >=  0 ){
//         str1 += str[i]
//         i--
// }
// console.log("String after reversing:" +str1);


        // 18) Write a program that display largest integer among 10 Integers.

// const list=[1,2,3,44,55,66,27,81,90,100]        
// let largest = list[0]
// let i = 0
// while(i < list.length){
//         if (list[i] > largest){
//                 largest = list[i]
//         }
//         i++
// }
// console.log((largest));

                                // Method 2 

// let largest=0
// let i = 1
// while(i <= 10){
//         let num = parseInt(prompt("Enter Number :"))
//         if (num > largest){
//                 largest = num
//         }
// console.log("Number you entered : ", num );
// i++
// }
// console.log("The largest number you entered is :",largest);

