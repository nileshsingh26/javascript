// "use strict"; //treat all js code as newer version

// // we are using nodejs not browser

// /*Data types on js:
// 1.number
// 2.bigint
// 3.string
// 4.boolean
// 5.null-->null is an object
// 6.undefined 

// */

// console.log(typeof('strinsds'))
// let myName="Nilesh"
// let anotherName= myName
// anotherName="chaiaurcode"
// console.log(myName)
// console.log(anotherName)


// let user={
//     email:"xyz@gmail.com", 
//     typo:'dsfs@hds'
// }

// let userTwo = user
// userTwo.email="niles@gmail.com"


// // the object make changes to the refernce that is to the origibal values

// console.log(user.email);
// console.log(userTwo.email)

// let name = "Nilesh Kumar Singh"
// let classes = "CS_IOT_3A"
// console.log(name)

// let arr1=["Nilesh","Satyam","Anshika","Pooja","vishnu"]
// console.log(arr1[1])
// console.table([])

const newName="   Nilesh  "
const oldName= newName
//substring buildin function
console.log(oldName.substring(3,6))
//trim function 
console.log(oldName.slice(3,6))
//replace function
const email="satyamsingh@gmail.com"
console.log(email.replace("satyam","nilesh")) 
console.log(email.includes("nilesh"))  

let strings= "hello my name is nilesh"
console.log(strings.split(" "))