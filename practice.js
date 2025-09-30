let colors=['red','green','blue'] //1st way
console.log(colors)
colors[2]="yellow"
console.log(colors)
colors[50]="gold"
console.log(colors)
console.log(colors[2])
console.log(colors[45])
console.log(colors.length)

let cartoon=new Array("dora","bheem","heidi") //2nd way
console.log(cartoon)
console.log(cartoon.length)
cartoon.push("bujji") // Adds one or more elements to the end of an array and returns the new length of the array.
console.log(cartoon)
cartoon.pop("bujji") //Removes the last element from an array and returns that element.
console.log(cartoon)
cartoon.unshift("roll no 21") // Adds one or more elements to the front of an array and returns the new length of the array
console.log(cartoon)
cartoon.shift("roll no 21")// Removes the first element from an array and returns that element.
console.log(cartoon)

let array1 = [1, 2, 3, 4];
let string1 = array1.toString()
console.log(array1)

let array = ['apple', 'banana', 'cherry'];
let string = array.toString()
console.log(array)

console.log(colors.at(2)) //To get element from the particular index.
console.log(colors.indexOf('RRR'))
console.log(colors.indexOf('red')) // find the first index at which a given element can be found in an array. If the element is not present, it returns -1.
console.log(colors.lastIndexOf('yellow')) //array from the end to the beginning and returns the index of the last occurrence of the specified element (2 in this case). If the element is not found, it returns -1.
let combine=colors.concat(array1)
 console.log(combine)
 let combine1=colors.concat(array)//Returns a new array comprised of this array joined with another array (s) and/or value(s).
console.log(combine1)
let num=[[1,2],[3,4],]
       console.log(num.flat()) 
        console.log(colors)
console.log(colors.copyWithin(4,2)) //To Copy part of the array into the same array at different locations.
console.log(colors)
