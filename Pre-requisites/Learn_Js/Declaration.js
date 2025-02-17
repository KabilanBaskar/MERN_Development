array=[1,2,3,3,4];
console.log(array[0])

//1st Type of object declaration
object = {
    "name" : "Danieal",
    "age" : 19,
    "skills" : ["Programming", "Designing"]
}
console.log(object)
console.log(object.name)
console.log(object["age"])
//2nd Type of object declaration
object2 = {}
object2["name"] = "Darwin"
object2["age"] = 20
object2["skills"] = ["Programming", "Designing"]

console.log(object2)
//3rd Type of object declaration

object3= new Object();
object3.name = "HI"
console.log(object3);

//set 
set = new Set(["hello"])
set.add("hello")
set.add("hi")
console.log(set)

// shift operators
console.log(-8>>3)

//for in loop
for ( i in object) {
    console.log(i) // It prints index value in array and then key value in objects
}

//for of loop for array
var arr = [2,2,3,4,5]
for( i of arr) {
    console.log(i)
}

//for of loop for objects
for (const i of object.skills) { //It does not invokes Symbol.iterator method to iterate and also the object is a plain one. So, it is not an iterable object
    console.log(i)
}

//for each loop for array
arr.forEach(i => {
    console.log(i)
});
//for each loop for object must be used only in function
obj = (object) => {
    Object.keys(object).forEach(values => {console.log(values)})
}
obj(object2)
//Normal function
function test() {
    console.log("Normal function")
}
test()

//Empty Arrow function
const Arrow = () => {
    console.log("Empty Arrow function")
}
Arrow()

//Array Arrow function 
var array = (arr) => {
    console.log(arr)
}
array(arr)