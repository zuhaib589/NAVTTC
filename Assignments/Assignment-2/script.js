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
// let res = num % 2 == 0 ? "Even" : "Odd"
// console.log(res)

        // 3) Write a program to find the largest of three numbers.

       
let num1 =  prompt("Enter Number 1 : ")      
let num2 =  prompt("Enter Number 2 : ")      
let num3 =  prompt("Enter Number 3 : ")      

if( num1 > num2 && num1 > num3){
    console.log("Number 1 is largest")
}
else if (num2 > num1 && num2> num3 ){
    console.log("Number 2 is largest ");
}
else{
    console.log("Number 3 is largest ");
}
