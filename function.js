//function is a block of code written to do a particular task 
//block of code is that anything enclosed between {}
//ex:{
// statements1;
  //statements2;
   //statements3;
//}
// syntax
// function functionname(parameter1,parameter2...parametern){
//     Body;
//     return Value;
// }
// let add=function sum(a,b){  //expression
//     let res=a+b;
//     return res
//  }
//  n1=+prompt("enter number")
//  n2=+prompt("enter number")
//  console.log(add(n1,n2))
 
//   let product=function mul(a,b){  // function expression assigning function to a variable
//      let res=a*b;
//     return res
//  }
//  n1=+prompt("enter n1")
//  n2=+prompt("enter n2")
// //  console.log(mul(2,3))
// console.log(product(n1,n2))

// let subtraction=function sub(a,b){
//    let result=a-b;
//    return result
// }
// n1=+prompt("enter a n1")
// n2=+prompt("enter a n2")
// console.log(subtraction(n1,n2))


let no=function number(n){
   if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
}
n=+prompt("enter a n")
console.log(no(n))

