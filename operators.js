// arithematic operators
let x=10,y=2;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//asssignment operators
let z=5;
z+=3
console.log(z)
z*=2;
console.log(z)
z-=4
console.log(z)
z/=2
console.log(z)
z%=2
console.log(z)

// comparision operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

// logical operators

let age=20;
console.log(age>=20 && age<=40)
console.log(age<=20 || age<=40)
console.log(!(age<18))

//string operators
let firstName="kavya"
let lastName="kaja"
let fullName=firstName+" "+lastName;
console.log(fullName)
let correctName=`Hello  ${firstName} ${lastName},welcome `
console.log(correctName)

// ternary operators
let myAge=19;
if(myAge>=18){
    console.log("eligible to vote")
}
else{
    console,log("you cannot vote")
}
let result=myAge>=18 ? "eligible to vote" :"ypu cannot vote"
console.log(result)

//increment and decrement operator
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "kavya")
console.log(typeof 18)