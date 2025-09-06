let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}
else if(marks>=80){
    console.log("B+ Grade")

}
else if(marks>=70)
{
        console.log("C+ Grade")

}
else{
    console.log("Fail")
}
 let day=5
switch(day){
        case 1:

            console.log("monday")
            break;
        case 2:
            console.log("tuesday")
            break;
        case 3:
            console.log("wednesday")
            break;
        case 4:
            console.log("thrusday")
            break;
        case 5:
            console.log("friday")
            break;
        case 6:
            console.log("saturday")
            break;
        case 7:
            console.log("monday")
            break;
        default:
            console.log("invalid");
            break;


}
// using for loop
let  n=10
for(i=0;i<n;i++)
{
    console.log(i)
}

// while loop
let num=27
while(num==27){

}
console.log(num)


let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

for(let color of colors){
    console.log(color)
}


let preson={
    name:"kavya",
    age:22,
    college:"jntugv"
}

for(let key in person){
    console.log(`${key}: ${person[key]}`)
}


for(let i=5;i>=0;i--)
{
    if(i===3)
    {
        continue;
    }
    else if(i===2)
    {
        break;
    }
console.log(i)    
}
