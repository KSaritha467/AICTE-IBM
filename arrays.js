 let array1=[1,2,3,4]
  console.log(array1)

 let array2=new Array("a","b","c","d","e")
  console.log(array2)


 let movies=['KGF1','KGF2','KGF3']
 console.log(movies)
 console.log(movies[0])
 movies[2]="arya"
 movies[30]="orange"
 console.log(movies)
 console.log(movies.length)



 movies.push("hit")
 console.log(movies)
 movies.push("MAD","MAD2") 
 console.log(movies)
 movies.pop()
 console.log(movies)



 movies.unshift("arjun")
console.log(movies)



 movies.shift()
console.log(movies)



 delete movies[3]
 console.log(movies)
 console.log(movies[3])


 
 let colors=['red','green','blue']
        console.log(colors)
        colors[3]="yellow"
        console.log(colors)
        colors[50]="black"
        console.log(colors)
        console.log(colors[2])
        console.log(colors[45])
        console.log(colors.length)


        let movies=new Array('mirchi','arya','amaran','arya')
        console.log(movies)
        console.log(movies.length)
        movies.push("RRR")
        console.log(movies)
        // movies.pop()
        console.log(movies.pop())
        movies.unshift("maharshi")
        console.log(movies)
        console.log("removed element is:"+colors.shift())
        let a=movies.toString()
        console.log(a)
        let b=movies.join("*")
        console.log(b)

        console.log(colors.at(2))
        console.log(movies.lastIndexOf("arya"))
        console.log(movies.indexOf('RRR'))

        delete colors[0]
        console.log(colors)

        let combine=colors.concat(movies)
        console.log(combine)

        let num=[[1,2],[3,4],[5,6]]
       console.log(num.flat()) 
        console.log(colors)
       console.log(colors.copyWithin(3,0))
        console.log(movies)
    //    console.log(movies.slice(1,4))

        movies.splice(2,0,"RRR","naani")
        console.log(movies)
        
        console.log(movies.splice(1,1))
        console.log(movies)

        console.log(colors.reverse())
       console.log(colors.sort())
       console.log(colors.includes("red") )

    

let fruits=["apple","banana","cherry","dates"]
for(x in fruits){
    console.log(x)
}


let language=["c","c++","java"]
for(y of language){
    console.log(y)
}


