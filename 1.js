
//node sting methods
// javascript string are primitive datatype that is used to work with text
// there are 3 way to use string

// 1.single quotation ==> ' '
// 2.doble quotation ==> " "
// 3.template literals ==> ` ` (back ticks)

let a = 'maggie'
let b = "maggie"
let c = "maggie"

console.log(a,b,c)

console.log(a[0]) //m
console.log(b[1]) //a
console.log(c[2]) //g

console.log(a.length) //6

// in javascript its case sensitive
// a not equal to A
// cis not equal to C

console.log("c" == "C")
console.log("c" == "C")



//In Js to add new lines in string 
// use \n
console.log("I am\n madhusree\nshreee")

let college = "Global"
console.log(college.charAt(0))

//charAt takes in value and gives string element of that

// 2. indexof

let fname = "College"
console.log(fname.indexOf("C"))


/// 3. concat
let n1= "global"
let n2= " college"
let n3= n1.concat(n2);
console.log(n3)
console.log(n1.concat(n2))


//4.includes

let msg = "Javasacript is  fun ";
console.log(msg.includes("fun"))

// 5. lastindexOf

let m1 = "global";
console.log(m1.lastIndexOf("l"))
console.log(m1.lastIndexOf("s"))


//6. length

let lang = "java";
console.log(lang.length)

//7. repeat()
let m2= "hi"
console.log(m2.repeat(0))

//8. replace()
let m3 ="ball bat"
console.log(m3.replace("b","c"))

//9.replceAll()
console.log(m3.replaceAll("b","c"))

//10.startsWith()
//11.endsWitch()

let m4 = "javascript is fun";
console.log(m4.startsWith("java"))//true
console.log(m4.startsWith("fun"))//false

console.log(m4.endsWith("fun"))//true
 console.log(m4.endsWith("java"))//false

 //12. toLowerCase()
 //13.toUpperCase()

 let m5 = "Hello";
 console.log(m5.toLowerCase()) // Hello
 let m6 = "hello"
 console.log(m6.toUpperCase()) // Hello

 //14. trim()
 let m7 ="   hello global    "
 console.log(m7.trim())

 // 15. slice(index,length)

 let m8 = "java"
 //index  0123
 //length 1234

 console.log(m8.slice(2,3))

 //16.  split()
 let m9 = "global-college-hyd";
 //["global","college","hyd"]
 console.log(m9.split(" "))

 