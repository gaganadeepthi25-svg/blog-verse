//arithmetic operators

let x=10,y=3

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//assignment operators

let z=5
z+=3
console.log(z)
z*=2
console.log(z)
z-=4
console.log(z)
z/=2
console.log(z)
z%=2
console.log(z)

//comparison operators

let a=10,b="10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)

//logical operators

let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

// string operators

let firstname="Gagana"
let lastname="Deepthi"
let fullname=firstname+" "+lastname
console.log(fullname)
let correctName=`Hello ${firstname} ${lastname}, Welcome to Dev Astra!!`
console.log(correctName)

//ternary operator

let myage=18
if(myage>=18){
    console.log("eligible to vote")
}
else{
    console.log("not eligible")
}
let result=myage>=18 ? "eligible to vote":"not eligible"
console.log(result)

// increment and decrement operations

let count=5
console.log(count++)
console.log(count)
console.log(++count)
console.log(count--)
console.log(count)
console.log(--count)

//typeof operations

console.log(typeof count)
console.log(typeof "deepthi")
console.log(typeof 57)
