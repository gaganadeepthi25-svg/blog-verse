let person={
    name:"deepthi",
    age:18
}
console.log(person.name)
console.log(person["age"])
//destructuring assignment
const {name,age}=person
console.log(name)
console.log(age)

let fruits=["apple","orange","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num)//transform each element 
console.log(square)
let evens=numbers.filter((num)=>num%2==0)//filters based on conditions
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)
let persons=[{name:"gagana",marks:85},{name:"deepthi",marks:90}]
let max=0
for(let person of persons){
    if(max<person.marks){
        maxMarks=person.marks
        topper=person.name
    }
} 
console.log(`topper is ${topper} and he got ${maxMarks}`)