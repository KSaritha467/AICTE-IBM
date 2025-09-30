let a=2
 let b=6


 let c="ece"
 let d="5"

  console.log(b**=a)
 console.log(a)
 console.log(b)


 console.log(a||b)

 console.log(a===b)
 document.write(a+"=="+b+":")
 document.write(a==b)
 document.write("<br>")

 document.write(a+"=="+d+":")
 document.write(a==d)
 document.write("<br>")

 document.write(a+"=="+d+":")
 document.write(a===d)
 document.write("<br>")
 document.write(a+"!="+b+":")
 console.log(a!=b)
 document.write(a!=b)
document.write("<br>")

 document.write(a+">"+b+":")
 console.log(a>b)
 document.write(a>b)
 document.write("<br>")

 document.write(a+">="+b+":")
console.log(a>=b)
document.write(a>=b)
document.write("<br>")

document.write(a+"<"+b+":")
console.log(a<b)
document.write(a<b)
document.write("<br>")

document.write(a+"<="+b+":")
console.log(a<=b)
document.write(a<=b)
document.write("<br>")

console.log(c+d)


console.log(a+b)
document.write(a+b)


 console.log(a-b)


console.log(a*b)


console.log(a/b)

console.log(b%a)

// unary operators
console.log(a++)
console.log(a)
console.log(b--)
console.log(b)

// a=50
// b=20
// a>b?console.log(a*b):console.log(a/b)

// a=5
// b=5
// if(a==b){
// console.log("a  is equal to b")
// }
// else if(a>b){
//     console.log("a is greater than b")
// }
// else{
//     console.log("a is less than b")
// }



// if(x>10){
//     console.log("a is greater than 10")
//     if(x%2==0){
//         console.log("a is divisible by 2")  
//     }
//     else{
//         console.log(" not divisible ")
//     }
//     }
//     else{
//         console.log("a is less than 10")
//     }



// let weather=prompt("enter the weather condition")
// switch(weather){
//     case "rainy":
//         console.log("its rainy")
//         break
//         case "cloudy":
//         console.log("its cloudy")
//         break
//         case "sunny":
//         console.log("its sunny")
//         break
//         default:
//             console.log("default")
// }

// x=prompt("enter x value")
// if(x==0){
//     console.log("x is zero")
// }
// else if(x>0){
//     console.log("x is positive ")
// }
// else{
//     console.log("x is negative")
// }


// x=prompt("enter x value")
// if(x%2==0){
//     console.log("x is even")
// }
// else {
//     console.log("x is odd ")
// }

// x=+prompt("enter x value")
// if(x%5==0){
//      console.log("a is divisible by 5")
//          if(x%3==0){
//              console.log("a is divisible by 3")  
//          }
//          else{
//              console.log(" a is not divisible by 3")
//          }
//          }
//          else{
//            console.log("a  is not divisible by 5")
//          }

n=+prompt("enter a number")
if(n%5==0){
    if(n%3==0){
        console.log("given number is divisible by both 5 and 3")
    }
    else{
        console.log("given number is divisible by 5 but not divisible by 3")
    }
}
else{
    console.log("given number is not divisible by 5")
}