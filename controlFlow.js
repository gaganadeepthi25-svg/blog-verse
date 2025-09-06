let marks=85
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
    console.log("A Grade")
}else if(marks>=70){
    console.log("B Grade")
}else{
    console.log("Fail")
}

//switch case

let day=5
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    case 8:
        console.log("Invalid Choice")
        break
}
for(let i=0;i<7;i++){
    console.log(i)
}
let k=0
while(k<5){
    console.log(k)
    k++
}
let j=0
do{
    console.log("hello")
    j++
}
while(j<5)
let colors=["red","black","lavendar"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color)
}
let person={
    name:"deepthi",
    age:18,
    college:"JNTUGV"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>0;i--){
    if(i==3)
        continue
    else if(i==2)
        break
    console.log(i)
}