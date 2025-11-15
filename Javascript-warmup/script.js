//() {} [] are reference , rest are primitive
/*

// Data types in Javascript 

// 1. Primitive data type 
// 2. Reference data type - [],{},()- It is not copied directly it just creates a reference (To copy we can use spread operator)


var a= 10; var b=a;
var a = [1,2,3]; 
var b= a;
// As this is refernce datatype it will create reference to do real copy we use spread operator

var arr = [1,2,3]; var b= [...arr] //p solved


arr.forEach(function(values, index){ //index is optional
    console.log(values, index);
}) 
    

//iterating keys of an object, array, or string.
var obj ={ name: "ashish", age:21};
var arr =[3,4,5];
let str = "ash"; //string me ek ek character print hoga

for(let val in str){
    console.log(val, str[val]);
}

//iterating values of an iterable (arrays, strings, maps, sets). not with object 
let str = "ash";

for(let val of str){
    console.log(val);
}

//Explicitly kar skte object pe iterate
let person = { name: "ash", age: 21 };

// Keys
for (let key of Object.keys(person)) {
  console.log("Key:", key);
}

// Values
for (let value of Object.values(person)) {  ye 0,1,2... ke side value me array dega jisme key aur value hogi
  console.log("Value:", value);
}

// Entries (key + value)
for (let [key, value] of Object.entries(person)) { //ye 2 array return karega, ek keys ka aur ek values ka
  console.log(key, ":", value);
}





//0 false "" undefined null NaN document.all -> falsy
// how to check this  console.log(!!0) console.log(!!"helllo") 






// Types of function

 fucntion abc(){  //fucntion statement }

 fucntion(){  anonymous function, used in callback, kyuki usko usi jagah execute karna hota h }
 let add = fucntion(){  } varibale ka naam hi fun ka naam h

 let add = () =>{    fat arrow function }

 a => { fat arrow function with one parameter}

 ()=> 12; agar sirf ek value return karni hai tab , without curly braces we can do this

 (f)(); IIFI

// func call karte time argument rkhte aur function defined karte kaam time brackets me parameter


function getSong(){
  setTimeout( function, delay);
}







//callback
function connectToServer(fun){
  console.log("Connecting to server...");
  fun();
}

function connected(fun2){
  console.log("Connected to server...");
  fun2(["1","2"]);
}


connectToServer(function(){
  connected(function(val){
    console.log(val);
  });
}); //callback hell



---------------------------------------------------------------


//promises

function connectToServer(){
  console.log("connecting to server");

  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve("Connected");
    }, 2000)
  })
}

function getcourses(){
  console.log("fetching courses");

  return new Promise((resolve, reject)=>{
    setTimeout(function(){
      resolve(["java","sql"]);
    }, 2000)
  })
}

connectToServer()
.then((res)=>{
  console.log(res);

  return getcourses(); 
  //get courses se jo promise ara usko return kardiya, wo next .then handle karega
})
.then((res)=>{
  console.log(res);
})

*/








//-------------- objects  -----------
// unordered collection of key → value pairs 
//key(properties) is always string or symbol and value can be anything( fucntion, obj, value)



//creation of object 

//1.  object literal
// const person ={ "name" : "ashi", age : 18, greet : function(){c.l(1)}};
// console.log(person.name);
// console.log(person["name"]);

//2. 
// const proto = { greet() { return "hi"; } };
// { greet: [Function: greet] }
// console.log(proto.greet());


//3
// const parent = { a: 1 };
// const child = Object.create(parent);
// console.log(Object.getPrototypeOf(child))
// console.log(child.a)
// console.log(child) //child is still undefined
// child.a // 1 from prototype



// for adding key and val

// person.city = "Nagpur"
// console.log(person.city);

// Object.freeze(person);
// Object.seal(person);
// seal -> values "change" kar sakte ho aur ( new add nahi kar skte)
// freeze -> values bhi "change" nahi kar sakte. (modification) (immutable)
//  NOTE : Sirf shallow freeze hota hai (nested objects freeze nahi hote)
 
// const person = {
//   age: 20,
//   address: {
//     city: "Delhi"
//   }
// };

// Object.freeze(person);
// person.age = 25; //wont work9
// person.address.city = "Mumbai"; // works
// console.log(person);


/// for copying obj
// const newObj = Object.assign({ x: 5 }, parent);
// const newObj = Object.assign({}, person)  
//multiple objects bhi dal skte . If two objects have the same key, the last one overwrites the earlier one      
// OR
// const newObj = {...parent}


//assign aur deconstructor dono case me ,yaha naya object banaya copy karke , par nested object ka reference store hua, isliye old obj ki values change hori
// const newObj = {...person}
// newObj.age = 22
// newObj.address.city = "Nagpur"
// console.log(newObj)
// console.log(person)
//deep clone nai hua 


//---------------object deep cloning---------IMPORTANT
// const newObj = JSON.parse(JSON.stringify(person));
// newObj.age = 22
// newObj.address.city = "Nagpur"
// console.log(newObj)
// console.log(person)

// ye wala deep cloning set ko copy nahi kar pata aur date ko bhi gadbad kardeta aur

//optimal - deepest clonning is 
// const newObj = structuredClone(person);
// newObj.age = 22
// newObj.address.city = "Nagpur"
// console.log(newObj)
// console.log(person)




// -------------------- Deconstruction-----------

// const [a,b,...rest] = [1,2,3,3,6];  //rest ek array hoga
// const [a,b] = [1,2,3];
// const [a,,c] = [1,2,3];  a me 1 aur c me 3
// const [a,b] = [1,2];
// console.log(rest);

//fast swap [x,y] =[y,x]


// const obj = { name: "ash", "age" : 20, city : "nagpur"};
// const {name: fname} = obj;   /* name as fname jana jayega */
// console.log(fname);

// const mergeArray = [...arr1, ...arr2];

// console.log(obj?.name);   jab pata na ho ki name exist karta h ya nahi tba ?.   for function greet?.()







//-----Sets

// let num = new Set([1,2,2,3]);
// console.log(num);

// num.add(4);
// num.add([4,5]);
// console.log(num);

// console.log(num.size);
// console.log(num.has(3));

// num.delete(3);
// console.log(num);

// num.clear()
// console.log(num);

// num.forEach((val)=> { console.log(val);});





//-------------MAP
// const userMap = new Map();
// const userMap = new Map( [
//   ["age", 20],["name", "ashish"],
// ]
// );

// userMap.set("age", 20);
// userMap.set("name", "ashish");
// console.log(userMap);

// console.log(userMap.has("name"));
// console.log(userMap.delete("name"));
// console.log(userMap);

// console.log(userMap.get("name"));

// for(const [key,val] of userMap){
//   // console.log( key + " " + val);
//   console.log(`${key} : ${val}`);
// }



//NULLISH
// const user = undefined
// console.log(user ??"ashish")




// Object.entries(objname).forEach((val)=> { console.log(val[0] + " " + val[1])});

//true + false = 1 all .falsy values are 0   
// typeof NaN === 'number' //true


// let a = []
// a instanceof Array //true  . instance of works only with reference values ( array , object) and not with primitive values like number,string
// and typeof array is object


// function show(a,b,...rest){ console.log (a,b,rest)}  show(1,2,3,4);







//first class function  - function  ko values ki taraf treat kar skte aur variable me store aur function me pass kar skte
//higher order function - jo fucntion dusra fun return ya accet kare
//pure function - jo outer value change na kare
//impure function - jo outer value change karta hai 





//Closures

//jab function koi dusra function return karta hai aur return hone wala function apne parent ke variable ka hamesha use karta hai usko closure bolte. even after outer function is returned

// function createCounter() {
//   let count = 0; // private variable

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); // 1
// counter(); // 2





//----Q1 . get any number of scores and return sum

// function sum(...score){
//   var sum =0;
//   score.forEach((val)=>{  sum += val});
//   return sum;
// }

// console.log(sum(1,2,3,4,4));



// ----- Q2 . make a reusable calculator for discount

// function discount(discount){
//     return function(price){
//       return price - price * ( discount/100);
//     }
// }


// const ten = discount(10);
// const twenty = discount(20);

// console.log(ten(200));
// console.log(ten(200));
// console.log(twenty(200));





// Q3. make counter program 

// function counter(){
//   let  count =0;
//   return function(){
//     return ++count;
//   }
// }


// const c = counter();
// console.log(c());
// console.log(c());

// const d = counter();
// console.log(d());







