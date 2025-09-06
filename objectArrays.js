let person={
    name:"kavyaKaja",
    age:18
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;// destructructing assignment
console.log(name)
console.log(age)

let fruits =["apple","banana","mango"]
console.log(fruits[0])


let num=[1,2,3,4,5]

let square=num.map((num)=>num*num); //transfrom each elemnts
console.log(square)

let evens=num.filter((num)=>num%2==0) //filter the values based on the condition
console.log(evens)

let sum=num.reduce((present,nums)=> present+nums) //reduce result as single element
console.log(sum)
  
let persons=[
   {
    name:"kavya",
    marks:78
    },
    {
        name:"chinni",
        marks:56
    },
    {
        name:"swathi",
        marks:65
    }
]
let maxMarks=0;
let topper="";
for ( let person of persons){
    if(person.marks>maxMarks)
        {
        maxMarks=person.marks;
        topper=person.name;

    }
        
}
console.log(`topper is ${topper} and she got ${maxMarks}`)    


 
