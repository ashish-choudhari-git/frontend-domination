/*
TOPICS COVERED: 
primitive datatype
reference datatype
spread operator
iterable( array, string, object, map , set)
for in loop 
for of loop            ForEach is array method
Object.keys(person) 1 array return
Object.values(person) 1 array return
Object.entries(person) 2 array return [ key, value]
7 falsy values
callback 
promises
types of function 4-4
Object creation , retrieval (2 . ["n"]), addition 
[value can be fun, obj, val]
object.create(parent), Object.getPrototypeOf(child)
Object.freeze(person) (no val change, no add, shallow freeze, no nested freeze), Object.seal(person) (value change, no add)
for copying object : Object.assign({},{x:2},obj1,obj2) OR  {...obj} (both store nested object reference) OR JSON.parse(JSON.stringify(person)) better (no copy of set and date gadbad) OR StructuredClone(person) best
Deconstructor [a,b,...rest], [a,,c] [a,b] [...arr,...arr2] merge, [a,b] =[x,y]swap , no confirmation of existence then  ?. is used
set -> add has size delete clear
map -> get set has delete 
const user = undefined console.log(user?? "ashish") NULLISH
typeof checks the primitive datatype of value
typeof NaN === 'number' //true
typeof {} [] array null ->  is object
instanceof checks whether the object is created from specific constructor/class.  let arr = []; arr instanceof Array/Object/String
Closure
Explicity conversion
Failed numerical operation -> NaN output
Hoisting
IIFE
Arrays 9 methods
[prop] in object
obj.aa vs obj["aa"] 
DOM    className html collection , querySelectorAll nodelist forEach forof
innerText textContent* outerText
Attribute ( getAttribute, . set, has , remove)
kisi element ko DOM se remove karna hai to , element ko select karna aur .remove() .removeChild()
DDM : .prepend(ab) .append(ab)
select element ab.classList array classList[0] .add("blue") .remove .toggle .contains .length .value all classes in single string
let ed = document.querySelectorAll("ul li:nth-child(2n)"); select every 2nd element
Event listeners   addEventListener removeEL   , dblclick, click, change, submit, input, keydown    fileinput.click();
mouseover, out, move (bubble)    mouseenter/mouseleave ( keydown, fileupload, mousemove, form, select file)
Event Bubbling [ul pe event , li pe stop propagation]
Event capturing
Event Flow  [capturing, bubbling phase (defualt on). By default, JavaScript uses event bubbling. Capturing can be enabled by passing true]
Form [ e.preventDefault(), iniline validation( autocomplete="off", required, minlenght,maxlength , not reliable), inp[0].value.length,regex.test("as@gmail") ]
error dkhana hai to classs banan, display =none , style.display  "initial" jabb error aaye
setTimeout(function, time) clearTimeout() setInterval() clearInterval
Date is built in constructor function ( new Date(), getFullYear2026, Month0-11, date1-31, hours0-11, day0-6, minutes 0-59, second 0-59)
localStorage, sessionStorage, cookies ( setItem("name","ash"), getItem, removeItem, clear(), document.cookie ="name=ash")
Dark-light-mode script
Scoping ( Js does not have dynamic scoping, it hass lexical scopiing. global and block scope)
Execution Context ( its process, memory phase and execution phase)
debouncing
Real time seaching , card add, toaster 
This keyword ( global win , function win, method ES5 obj, method arrowfun win, method ES5 -> ES5 win, method ES5 -> arrowfun obj, class me this obj instnace hoga, EventListener me jispe event laga hai wo(element))
OOP















/*
s
//() {} [] are reference , rest are primitive

// Data types in Javascript s

// 1. Primitive data type 
// 2. Reference data type - [],{},()- It is not copied directly it just creates a reference (To copy we can use spread operator)


var a= 10; var b=a;  //b ko chnage karne pe a change nahi hoga
var a = [1,2,3]; 
var b= a;
// As this is refernce datatype it will create reference to do real copy we use spread operator

var arr = [1,2,3]; var b= [...arr] //p solved


arr.forEach(function(values, index){ //index is optional
    console.log(values, index);
}) 
    

// iterating keys of an object, array, or string.

var obj ={ name: "ashish", age:21};
var arr =[3,4,5];
let str = "ash"; //string me ek ek character print hoga

for(let val in str){
    console.log(val, str[val]);  val me 0 to 2 and str[val] me a s h
}

//iterating values of an iterable (arrays, strings, maps, sets). not with object 
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
// how to check this  console.log(!!0) console.log(!!"helllo") .






// Types of function

 fucntion abc(){  //fucntion statement }

 fucntion(){  anonymous function, used in callback, kyuki usko usi jagah execute karna hota h }
 let add = fucntion(){  } varibale ka naam hi fun ka naam h

 let add = () =>{    fat arrow function }

 a => { fat arrow function with one parameter}

 ()=> 12; agar sirf ek value return karni hai tab , without curly braces we can do this

 (f)(); IIFE

// func call karte time argument rkhte aur function defined karte kaam time brackets me parameter


function getSong(){
  setTimeout( function, delay);
}







//callback

//callback is fucntion passed to another function , whcih is executed later after completion of some work.
//callback hell is multiple callback nested inside each other

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


problem with callback : 
callbackhell, less readable code, diffuclut debuging, error handeling


callback and promise handles : 
asynchronous operation ,timers, api call, file handleling
---------------------------------------------------------------


//promises

//promise is object that represents the eventual "completion or failure" of an asynchronous operation
//better error handeling, improve readability, chaining async operations
//3 states : pending , fullfilled, rejected

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
//unordered collection of key → value pairs 
//key(properties) is always string or symbol and value can be anything( fucntion, obj, value)

 

//creation of object 

//1.  object literal
// const person ={ "name" : "ashi", age : 18, greet : function(){
//   console.log(person.name);
// }};

// console.log(person.greet());
// console.log(person["name"]);

//2. 
// const proto = { greet() { return "hi"; } };   // , je baad function bhi likh skte
// console.log(proto.greet());



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


// assign aur deconstructor dono case me ,yaha naya object banaya copy karke , par nested object ka reference store hua, isliye old obj ki values change hori
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
// console.log(b);
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

let num = new Set([1,2,2,3]);    // only unique elem  //  removng duplicate //set constructor takes iterables
// console.log(num);

// num.add(4);
// num.add([4,5]);  ye as a array store hoga
// console.log(num);

// num.add("ashish");
// console.log(num);

// console.log(num.size);
// console.log(num.has(3));

// num.delete(3);
// console.log(num);

// num.clear()
// console.log(num);

// num.forEach((val)=> { console.log(val);});

//add delete has clear size



//-------------MAP
// const userMap = new Map();
// const userMap = new Map( [
//   ["age", 20],["name", "ashish"],
// ]
// );   like 2d array structure, its not 2d array

// userMap.set("age", 20);
// userMap.set("name", "ashish");
// console.log(userMap);

// console.log(userMap.has("name"));
// console.log(userMap.delete("name"));
// console.log(userMap);

// console.log(userMap.get("name"));

// for(const [key,val] of userMap){        //destructuring
//   // console.log( key + " " + val);
//   console.log(`${key} : ${val}`);
// }

//get set delete has


//NULLISH
// const user = undefined
// console.log(user ??"ashish")




// Object.entries(objname).forEach((val)=> { console.log(val[0] + " " + val[1])});

//true + false = 1 all .falsy values are 0   
// typeof NaN === 'number' //true
// and typeof array is object


// let a = []
// a instanceof Array //true
//"hello" instanceof String //false bcz "hello" is primitive


// function show(a,b,...rest){ console.log (a,b,rest)}  show(1,2,3,4);







//first class function  - function  ko values ki taraf treat kar skte aur variable me store aur function me pass kar skte
//higher order function - jo fucntion dusra fun return ya accept kare
//pure function - jo outer value change na kare
//impure function - jo outer value change karta hai 





//Closures

//jab function koi dusra function return karta hai aur return hone wala function apne parent ke variable ka hamesha use karta hai usko closure bolte. even after outer function is returned

//A closure in javascript is created when an inner function remembers and access varibales of its outer function scope evenn after outer function has finished executing.

//inner funciton apne lexical scope ke varibales of yaad rakhta hai

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

//jab closure call hota hai tab js , closure function and uske varibales ka backlink bnta hai [[environment]] me

//fayda - 
// 1. variables ko private rakh skte
// 2. encapsulation , memoizatiin, maintaining state in async operations              





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




// Explicity conversion
// console.log(Number("3"));

//jab failed number operation (jab number pe operation hota aur wo glt aata) tab NaN print hota
// console.log(2*#);


//------------------Instance of 
// let a  = []
// let b = {}
// let c = 34

// console.log(a instanceof Array); //true  //should not be array
// console.log(b instanceof Object) //true
// console.log(c instanceof Number) //false - instance of works only on reference value




//----------Hoisiting
// it is behaviour of js  of move varibales and function declaration to top 

// only declration is hoisted , not initialization
// fucntion declartionn - can be called before declaration        abcd() function abcd(){ -- }
// function expressions are NOT hoisted      let ans = function(){ --}







// Immediately Invoked Function Expression
//IIFE are used to create private variable.

// let ash = (function(){
//   let balance = 0;  // we cant acces balance varibale directly //object is return , not function 
//   return {
//     getBalance : function(){        //ye dono function closure hai
//       return balance;
//     },
//     setBalance: function(val){
//       balance =val;
//     },
//   }
// })();

// console.log(ash.getBalance());






//------------------------------------ARRAYS
// let arr = [23,88,3,6,8,2];

// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.push(111));  //return me new arr size aata
// console.log(arr.unshift(222)); //same size return hoga hai after adding
// console.log(arr.pop());  //jo value nikli wo return hoga
// console.log(arr.shift());  //same
// console.log(arr.sort());
// console.log(arr.slice(0,2));   //0th 1st ye 2 element return ho jayege, wihtout changing original array
// console.log(arr.splice(0,1)); //0th pos pe jake 1 elem hata do . uar jo element hata hai wo return ho jayega
// console.log(arr.splice(0,1,333,44)); //0th pos pe jake 1 elem hata do ,aur 333,44 ko add karo
// console.log(arr);


// arr.sort(function(a,b){
//   return b-a;   // sort in decending, a-b kiya to asc
//   // return a-b;
// })

//descending ke liye arr.sort().reverse()  yes, kaam karta hai
// console.log(arr);

//reduce


// let red = [1,2];

// .reduce( accumulator, currentvalue, currentindex, array) array contain inital value for accumulator

// let ans = red.reduce(function(acc,val){
//   return acc + val;
// });
// },3) only 1 values

//initals value apne man se dalna hai to ) pahle ,3 dal skte

// console.log(ans);


// let a = arr.find( function(val){
//   // return val === 8;
//   return val > 8; //first wala >8 number return
// })    // agar Arr me 8 hoga to variabe me first wala 8 ayega, otherwise undefined

// console.log(a);

// let a = arr.some( function(val){
//   return val >8;
// })    // true return karega agar 1 bhi 8 se bada hua else false

// console.log(a);

// let a = arr.every( function(val){
//   return val >= 1;
// })    //true if sab 1 se bade hoge

// console.log(a); 


// let newarr = arr; // ye reference store karega
// let newArr  = [...arr] // ye values store kareega without reference  //copy


// map filter reduce find some every  



//----------------- Q1. add "banana","apple" at index 1
// let fruits = ["kela","seb"];
// fruits.splice(1,0,"banana","apple");
// console.log(fruits);





//------------------------------------OBJECTS

// let prop = "gender";

// let obj ={
//   "name": "ashish",
//   age : 19,
//   greet : function(){ console.log("hellow")},
//   add : { 
//     city : "nagpur",
//     state : "maharashtra"
//   },
//   [prop] : "male"
// }

// console.log(obj);

// obj.name vs obj["name"]
// let aa ="name";
// obj.aa likha to aa ki jagah name nahi ayega, . ke baad jo likha hoga wahi seach hoga
// agar value cahhiye to obj["aa"] use karna wo obj["name"] ban jayega . aa ki vlaue change kar skte tab use karna

// obj.name ke jagah obj?.name , error nhi ayega if value nahi hai to


// let {city, state} = obj.add; // ab acccess karne ke liye bar bar lamba likhna nahi h
// console.log(city);


// let newObj = {...obj}; 
// let newObj = Object.assign({}, obj); 
//Yahaan spread operator aru assign sirf ek level tak copy karta hai. name → primitive → real copy. add → non-primitive (object) → reference copy
//stringify*, structuredClone**




// DOCUMENT OBJECT MODEL

// document.body.style.background = "red";

// let body = document.body;

// body.style.background = "black";
// body.style.color = "white";


// document.getElementById   //document ke baad body mat dalna
// document.querySelector("#idkaname")
// document.getElementsByClassName  //return HTML collections
// document.getElementsByName
// document.getElementsByTagName
// document.querySelectorAll    //return nodeList   //iterate with forEach forof loop

// document.querySelector  //universal, sab select kar skta


// let abcd = document.getElementById("title"); 
// abcd.style.color = "red";

// body.querySelector("h1").style.color = "red"; //sirf first waal hi select hoga
// document.body.querySelectorAll("h1")[0].style.color = "red"; 
// let abcd = document.body.querySelectorAll("h1");  //nodelist return karta hai, array jeisa nahi hai, forof loop chala skte
// abcd[1].style.color = "red";                                                                                                                                                                                                 

// for(const a of abcd){
//   a.style.color = "red"; 
// }

// abcd.forEach((e)=>{
//   e.style.color = "red"; 
// })

// console.dir(element)
// let h1 = body.querySelector("h1");
// h1.innerHTML = "<i>red</>";  
//agar yaha textContent use karte , the browser treats it as plain text, not HTML.
// outerHTML tag ko bhi select karlega text ke saath

// h1.hidden = true;


//textContent
// Returns all text exactly as present in the DOM. Includes hidden elements. faster than innertext bcz inT computes styling
//<div id="box">
//  Hello
//  <span style="display:none">Hidden</span>
//  World
// </div>
// op: Hello Hidden World

//innerText 
// Returns only the text visible to the user.
// "Hello World"









// ------ Attribute manipulation

//setAttribute, getAttribute, hasAttribute, removeAttribute


// body.querySelector("a").href = "https://www.google.com";


//1
// body.querySelector("a").setAttribute("href", "url");  //src


//2
// let ab = body.querySelector("a").getAttribute("href");
// console.log(ab);


//3
// console.log(body.querySelector("a").hasAttribute("href"));   //True ro false


//4   
// console.log(body.querySelector("a").removeAttribute("href"));




//-------remove any element
// let h1 = document.body.querySelector("h1");
// h1.remove();s







//--------Dynamic dom manipulation

// let ab = document.createElement("h1");
// ab.textContent = "hi ashii";
// body.prepend(ab);
// body.append(ab);
// body.appendChild(ab);
// body.removeChild(ab);




//------ classList 
// let ab = document.getElementById("title");
// ab.classList.add("blue");
// ab.classList.remove("blue");
// ab.classList.toggle("blue");

// console.log(ab.classList);  // array index classList[0] classList[1]
// console.log(ab.classList.contains("random"));
// console.log(ab.classList.value);  //string me dega puri classes
// console.log(ab.classList.length);

//6


// let cd = document.querySelectorAll(".list");    //returned nodeList

// cd.forEach(function(val){
//   console.log(val.textContent);             //for loop se bhi kar skte
// })
// forEach() is an array method used to iterate over array that runs a callback function for every element in the array. 

// textContent(faster) > innerText (hidden wale ko nahi nikalta)


// img.src = 'xyz'; OR
// img.setAttribute("src","xyz")



//kisi element ko hover karne pe , uka title wala content dikhne lagta


  
// Q. remove first element from list
// let ul = document.getElementsByTagName("ul");
// let li = document.getElementsByName("li");
// ul.removeChild(li);


// --- Q2. select every 2nd elemetn
// let ed = document.querySelectorAll("ul li:nth-child(2n)");
// ed.forEach((val)=>{val.classList.add("highlight")});











//-----------------EVENT LISTENER & handeling

//browser me koi bhi harkat hue to event raise ho jayega

//select target elem
//think what should to be happened
//write what you want

// let sel = document.querySelector("h1");

// function changeColor(){
//       sel.style.color = "red";
// }

//adding 

// sel.addEventListener("dblclick", changeColor);
// sel.addEventListener("click", changeColor);

//removing

// sel.removeEventListener("click", changeColor);


// let sel = document.querySelector("input");

// sel.addEventListener("input", (e)=>{
//   console.log(e.data);
//   console.log(e.target.value);
// })






// let sel = document.querySelector("select");

// sel.addEventListener("change" ,(e)=>{
//   body.querySelector("h1").textContent = `Device Selected : ${e.target.value}`    //jo value attribute me likha hoga wo milega
// })



  
// let sel = document.querySelector("h1");

// document.addEventListener("keydown" ,(e)=>{
//   if(e.key === " "){
//     sel.textContent = "space";
//   }else{
//     sel.textContent = e.key;
//   }
// });




//custom upload file
// let fileinp = document.getElementById("fileinp");
// let sel = document.querySelector(".btn");

// sel.addEventListener("click" ,()=>{
//   fileinp.click();
// });

// fileinp.addEventListener("change", (e)=>{
//   // sel.textContent = e.target?.files[0].name;  // e.target.value pe file ka path milega

//   let file = e.target?.files[0];
//   if(file){
//      sel.textContent = file.name;  //if file is not there then it will be undefined
//   }
// })




//------FORM SUBMIT

// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");
// let cards = document.querySelector(".cards");

// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
//   // console.log(input[0].value, input[1].value);
//   let crd = document.createElement("div");

//   crd.classList.add("card");
//   let fname = input[0].value;
//   let age = input[1].value;

//   crd.innerHTML =`<h3 class="name">${fname}</h3>
//         <h3 class="number">${age}</h3>`;

//   cards.appendChild(crd);
// })


//---------/out/Mouseover/move  (bubble)       mouseenter/mouseleave
// let ab = document.querySelector("#abcd");

// ab.addEventListener("mouseover", function(){
//   ab.style.backgroundColor = "green";
// });

// ab.addEventListener("mouseout", function(){
//   ab.style.backgroundColor = "yellow";
// });


// dets ye ek event object hai , target bhi event object hota

// window.addEventListener("mousemove", function(det){
//   // console.log(det);
//   // console.log(det.clientX);
//   // document.getElementById("abcd").innerHTML =` X = ${det.clientX} and Y = ${det.clientY} `;

//   // ab.style.top = det.clientY + "px";
//   // ab.style.left= det.clientX + "px";
// });


// EVENT OBEJCTS
// event.target
// event.type  -> it return click, submit , change, keyup down, mouse over out move, dblclick,
// event.preventDefault();   used in form, after submit page doent reload, form pe event listener lagana and prevent default

// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
// });









// --------------------EVENT BUBBLING

//Event bubbling is a mechanism in JavaScript where an event starts from the target element and propagates upward
 
// Bubbling means: when an event happens on a child element, it also “bubbles up” and triggers the same event on its parent, then grandparent up to document.  
// targeted elem se pure doc tak jayega propagation for sure

// ex1
// parent = document.querySelector("#parent");
// child = document.querySelector("#child");
// parent.addEventListener("click", () => console.log("parent mouseover"));
// child.addEventListener("mouseover", () => console.log("child mouseover"));
//yaha pe event bubbble hoga par parent pe event alg hai to parent ka event nahi chalega

// ex2
// ul = document.querySelector("ul"); 
// ul.addEventListener("click", (dets)=>{
//   dets.target.classList.toggle("line-through");
// });
//jis li pe click karege, wo specific item pe changes kar sakte, kyuki li se event ul tak bubble hoga


//agar bubble up nahi karna hai to
// li = document.querySelector("li");
// li.addEventListener("click", (e)=>{
//   e.stopPropagation();
// });





//--------------Event capturing

// Event capturing is a mechanism where an event propagates from the top to the target element

// a = document.querySelector(".a");
// b = document.querySelector(".b");
// c = document.querySelector(".c");
// button = document.querySelector("button");

// a.addEventListener("click", ()=>{
//   console.log("a clicked");
// }, true);

// c.addEventListener("click", ()=>{
//   console.log("c clicked");
// });

// button.addEventListener("click", (e)=>{
//   console.log("button clicked");
//   // e.stopPropagation();
// });

//agar button pe clck kiye to button - > C -> A, event bubbling hora










//Event flow , propagation


// jab bhi koi event raise hota hai (click, mouseover etc.), to event flow 2 phases me chalta hai:

// phase 1 : Event Capturing (Top → Down)
// event top level element se target element tak aata hai
// capturing phase by default OFF hoti hai

// phase 2 : Event Bubbling (Bottom → Up)
// event target element se parent elements ki taraf jaata hai
// JavaScript by default bubbling use karta hai


// By default, JavaScript uses event bubbling.
// Passing true in addEventListener  as third parameter enables capturing phase
// capture phase on karle ke liye listener ke last braces ke aage , true likhdo
// capturing ON karne ke liye:
// object.addEventListener("", ()=>{}, true);
// modern syntax:
// object.addEventListener("", ()=>{}, { capture: true });

// agar koi listener capturing phase 1 me execute ho gaya, to wo bubbling phase me dobara execute nahi hota

// ex:
// grandparent → parent → middle → child
// sirf parent pe capturing ON hai

// child pe click karne par output : parent  child  middle  grandparent

// stopPropagation() event ko aage propagate hone se rokta hai











//---------------------FROM VALIDATIONS

//input reading
//form submit prevent deafult
//field level validation
//inline vlaidation
//regrex email vlaidation regex.test(inp[0].value)
//suggestion off autocomplete ="off"
 

// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");

// form.addEventListener("submit", (e)=>{
//   e.preventDefault(); //isse refresh pe value gayab nai hoti, aur form submit nahi hota, jab tak js chal na jaye

//   //name pe validation

//   if(inp[0].value.length < 3){
//     alert("name should be greater then 3 char");
//   }
  
//   //name input ko id deke bhi directly access kar skte the
//   //inline validation : input tag me "required", "minlength", "maxlength"
//   //inline validation is not reliable


//   //email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   // console.log(emailRegex.test("aaa@g.com"));   //true or false

//   if(emailRegex.test(inp[1].value)){
//     console.log("email is correct");

//   }else{
//     console.log("email should be in corretct formate");
//     // document.querySelector("#emailerror").textContent ="email is incorrect";
//     //document.querySelector("#emailerror").style.display = "inital";
//   }

//   //form me suggestions nai chahiye to html me form tag me , autocomplete="off"
//   //password me bhi regex lagake , password validation karna
//   //error dkhana hai to classs banan, display =none , style.display  "initial"

//   inp.forEach((d)=>{
//     console.log(d.value);
//   });
// })





//-------------------------TIMER AND INTERVAL

//its like abhi se 10 second baad kuchh karo




// setTimeout(function, time)

// setTimeout(()=>{
//   console.log("ashish");
// }, 2000);

// let tm = setTimeout(()=>{
//   console.log("ashish");
// }, 2000);

// clearTimeout(tm);




// setInterval(()=>{
//   console.log("ashish");
// }, 2000);

// clearInterval(tm);



// EX: make a counter

// let count = 10 ;
// let interval = setInterval(()=>{
//   console.log(count--);
//   if(count <0){
//     clearInterval(interval);
//   }
// },1000);


// Ex2 : make download progress Bar

// let progressBar = document.querySelector(".progressBar");
// let count = 0;
// let seconds = 2;

// let int = setInterval(()=>{
//   if(count <=99){
//     count++;
//     progressBar.style.width = `${count}%`;
//   }else{
//   document.querySelector(".downloadText").textContent = "Downloaded";
//  clearInterval(int);
//   }
// }, seconds * 1000/100);








//-----------------------------Dates and time
// In JavaScript, all date & time stuff revolves around one built-in object:
// Date is a built-in constructor function in JavaScript used to create Date objects. its is not a class.
// const now = new Date();    
// it return object. typeof now is "object"
// console.log(now); // Day month  date time(H:M:S) GMS+0530 (ISD)

// console.log(Date.now()); // milliseconds since 1970 //1706781234567

// | Method              | Meaning                    |
// | ------------------- | -------------------------- |
// | `getFullYear()`     | 2026                       |
// | `getMonth()`        | 0–11                       |
// | `getDate()`         | Day of month (1–31)        |
// | `getDay()`          | Day of week (0–6, Sun = 0) |
// | `getHours()`        | 0–23                       |
// | `getMinutes()`      | 0–59                       |
// | `getSeconds()`      | 0–59                       |

// console.log(now.getMonth());



// Historically, JavaScript did not have real class syntax. Later, JavaScript introduced class syntax.






//--------------------LocalStorage, Session Storage , Cookies

// localStorage-> browser me data store karna, ~5MB ,Never expires, Stores data permanently until: user clears browser data, app removes it, Use cases : dark mode ,language preference, cart data
// sessionStorage -> data temporarily store karta hai, ~5MB , Removed when tab closes
// cookies -> store data in less amount , ~4kb, Can set expiry, sent to server with every request




//setItem, getItem, removeItem , clear
// localStorage.setItem("name", "ashish");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();

//updating
// localStorage.setItem("Name", "surwa");

//localstorage onyl stores string (does not store array or object)

//for storing object 
// localStorage.setItem("name", JSON.stringify([1,2,3]));
// console.log(JSON.parse(localStorage.getItem("name")));




//same properties used with session storage, tab udaya to session bhi gayab
// sessionStorage.setItem("name", "ashish");
// console.log(sessionStorage.getItem("name"));





//cookie kam data store karta and server pe automatically send ho jata
// document.cookie = "name=jj";



// EX.2 operating system ke dark ya light mode detect karek website ka theme change karo. localStorage > windows 


// function applyTheme(theme){
//   document.body.classList.remove("dark", "light");
//   document.body.classList.add(theme);
// }

// function getSystemTheme(){
//   return window.matchMedia('(prefers-color-scheme:dark)').matches ? "dark" : "light";
// }


// function setInitialtheme(){
//   const saved = localStorage.getItem("theme");
//   applyTheme(saved || getSystemTheme());
// }

// setInitialtheme();

// //windows ki theme change hui to

// window.matchMedia('(prefers-color-scheme:dark)').addEventListener("change", ()=>{
//   if(!localStorage.getItem("theme")){
//     applyTheme(getSystemTheme());
//   }
// });


// //toggle button se theme change

// document.querySelector("#button").addEventListener("click", ()=>{
//   let curretTheme = document.body.classList.contains("dark") ? "dark" : "light";
//   let newTheme = currentTheme === "dark" ? "light" : "dark";

//   applyTheme(newTheme);
//   localStorage.setItem("theme", newTheme);
// });



// Why JWT/session tokens are often stored in cookies?
// Because cookies support: HttpOnly, Secure, SameSite which improve security.
// localStorage is vulnerable to XSS attacks because JS can access it.





//----------------------Practice small project 
//real time search
// const users = [
//   { name: "Ashish chanchlani",
//     bio: "I am full stack web developer from nagpur"
//   },
//   { 
//     name: "apurwa nagpurkar", 
//     bio: "Frontend developer who loves React and UI design" 
//   },
//   { 
//     name: "sneha waghjive", 
//     bio: "Backend engineer specializing in Node.js and databases" 
//   },
//   { 
//     name: "harshika patle", 
//     bio: "Mobile app developer building Android and Flutter apps" 
//   },
//   { 
//     name: "Sneha malekar", 
//     bio: "I am full stack web developer from nagpur" 
//   },
//   { 
//     name: "sam khulsange", 
//     bio: "DevOps enthusiast focused on cloud and CI/CD pipelines" 
//   }
// ];

// const cardsContainer = document.querySelector(".cards");
// const input = document.querySelector("input");

// function showUsers(filteredUsers) {
//   cardsContainer.textContent = "";

//   if (filteredUsers.length === 0) {
//     cardsContainer.innerHTML = "<p style='color:white;'>No user found</p>";
//     return;
//   }

  // filteredUsers.forEach(user => {
  //   const card = document.createElement("div");
  //   card.classList.add("card");

  //   const heading = document.createElement("h2");
  //   heading.textContent = user.name;

  //   const para = document.createElement("p");
  //   para.textContent = user.bio;

  //   card.appendChild(heading);
  //   card.appendChild(para);
  //   cardsContainer.appendChild(card);
  // });


  //instead of user ek ek object lene ke sirf name input lena hai tio {name} ya {name, bio} aeise likh skte

//   filteredUsers.forEach(user => {
//     cardsContainer.innerHTML +=
//     `
//     <div class="card">
//       <h2>${user.name}</h2>
//       <p>${user.bio}</p>
//     </div>
//     `;
//   });
// }


// showUsers(users);


// function debounce(fun, delay =300){
//   let timeout;
//   return (...args)=>{
//     clearTimeout(timeout);
//     timeout = setTimeout(()=> fun(...args), delay);
//   }
// }


// input.addEventListener("input", debounce(
//   (e) => {
//   const searchText = e.target.value.toLowerCase();

//   const filtered = users.filter((user) =>
//     user.name.toLowerCase().includes(searchText) ||
//     user.bio.toLowerCase().includes(searchText)
//   );

//   showUsers(filtered);
// }
// ,200));











//-----------------------------SCOPES

// 1. function scope - function ke andar hi youse ho skte 
// 2. Block scope - {} braces ke andar hi youse ho skte hai ( if, else,while)
// 3. global scope - pure code me kahibhi use ho skte hai 

//--------------------- JS - lexical scoping  

// dynamic scoping js me nahi hoti .
// ex:

// let a = 12;
// function abcd() {
//   console.log (a);  
// }

// function defg() {
//   let a = 13;
//   abcd();   //this will print 12, if js were dynamic scoping it could print 13
// }
// defg();





//--------------------------EXECUTION CONTEXT  ( box ( memory + execution phase))

// JS jeise hi koi fucnction dekhta hai veise huuuui,  js banaata hai execution context, ye ek process hai jo ki do different phases mein chalta hai, memory phase and doosre ka naam hai execution phase

// Mera naam ashish choudhari hai, mere notes h , kuchh bhi likhuga , meri marjhiiiii







//--------------------------------TOASTER


// function createToaster(config){

//   let parent = document.querySelector(".parent");

//   parent.className += `
//   ${config.positionX === "right" ? "right-5" : "left-5"}
//   ${config.positionY === "top" ? "Top-5" : "bottom-5"}
//   `;

//   return function(notification){
//     // let box = `
//     //             <div class="notification bg-red-800 text-white pointer-event-none px-6 py-4  inline-block rounded-lg">
//     //                   ${notification}
//     //                 </div>
//     //           `;

//     // document.querySelector(".parent").insertAdjacentHTML("beforeend", box);
//     // appendChild() expects a DOM element, but box is a string.



//     let box = document.createElement("div");
//     box.textContent= notification;
//     box.className = `notification pointer-event-none px-6 py-4  inline-block rounded-lg  transition-all duration-900 ease-in-out
//     ${config.theme === "dark" ? "bg-white text-black" : "bg-green-800 text-white"}
//     `;


//     document.querySelector(".parent").appendChild(box);


//     setTimeout(() => {

//       box.classList.add("opacity-0", "translate-x-10");

//       setTimeout(() => {
//         box.remove();
//       }, 500);

//     }, config.duration * 1000);
//   }
// }



// let toaster = createToaster({
//   theme : "dark", 
//   positionX : "right",
//   positionY :"top",
//   duration : 3
// });

// toaster("You opened new business");

// setTimeout(()=>{
//   toaster("Your bank is credited with ₹ 10,00,000");
// }, 2000);

// setTimeout(()=>{
//   toaster("You woke up !");
// }, 4000);









// This keyword


// this keyword special keyword hai, kyuki , jaise ki baaki saare keyword ki "value ya unka nature" same rehta hai, this ki value ya nature badal jaata hai is baat se ki aap usey kaha youse kar rahe ho


// 1. global scope 
// console.log(this);
//global scope me this ki value window hoti


// 2. function scope
// function abcd(){
//   console.log(this);
//   //function ke adnar bhi this ki value window hai
// }
// abcd();


// 3. method scope 

//object/class ke adnar function ko method bolte
// let obj = {
//   name : "Ashish",
//   sayName : function(){
//     console.log(this);
//     console.log(this.name);
//   },
//    Caller : ()=>{
//     console.log(this); yaha epe this ki valeu object nahi  window hgi, fat arrow ke wajah se. 
//   }
// }

// obj.sayName();
//method ke andar this ki value object hoti , this = obj

// Kyunki function object ke through call hua (obj.sayName())

//object ke andar function aur uss fnction ke andar bhi function then console.log(this)kiya, to this ki value firse window hogi. inner function ko normal function ke jagah fat arrow function banao, to uski value object hogi.

//fat arrow hamesha this ki value apne parent se lete


//4. Event Handler

// document.querySelector("h1").addEventListener("click", ()=>{
//   console.log(this); //this ki value wo hogi , jispe add event listener laga hai
//   this.style.backgroundColor ="red";
// });


// 5. class 

// class Abcd{
//   constructor(){
//     console.log("hello");
//     this.a = 2;  //this keyword = blank object hai/instance
//   }
// }

// let val = new Abcd();  //new keyword ek blank object banyega/instance of class

// The new keyword creates a new object instance, links it to the class's prototype, executes the class constructor with value of this pointing to the new object, and finally returns that object.


// What does new do?
// Answer:
// Creates a new object.
// Sets prototype.
// Binds this.
// Returns object.


//Manual Binding : bind, call, apply
//function call karte time, hum manually decide kar sakte hai ki "this" ki value kya hogi. this are method is js.

// let obj = {
//   name: "ashish"
// }

// function abcd(){
// console.log(this); // abcd() kiya to , this = window( global scope). agar abcd.call(obj) , then this = obj
// }

// abcd.call(obj); 
// func.call(thisValue,arg1,arg2,arg3)

// function abcd(a,b,c){
// console.log(this,a,b,c);
// }

// abcd.call(obj,1,2,3); 

// abcd.apply(obj, [1,2,3]);
// same as call(), bas arguments array me jaate hai

//let func = abcd.bind(obj, 1,2,3);  does not execute/invoke function ,just return new function , with permanently binding value of this
// The first argument passed to .bind() becomes the this value for the target function




//example

let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

const userManager = {
  users :[],
  init : function (){
    form.addEventListener("submit", this.submitForm.bind(this))   // this.submitForm matlab function dere , userManagaer.submitForm .
  },
  submitForm  : function (e){
    e.preventDefault();
    console.log(this); // output : userManager object.
    //  agar this(obj) bind nahi karte to , this refers to the form element, because event listeners set this to the element that triggered the event. this ki value function ke andar element hoti 

    this.users.push({ name : inp[0].value});
    // form.rest();
  }
}












//-----------------------------OBJECT ORIENTED PROGRAMMING




// a class is a blueprint. object is instance of class

// JavaScript classes are "syntactic sugar" over the prototype system. JS is not truly class-based internally. it is prototype based

//Object.create(parent)
//Object.getPrototypeOf(child)
//child.__proto__






// When you write:

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj1 = new Person("ashish");
// obj1.greet();



// JavaScript internally creates something similar to:

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello ${this.name}`);
// };





// Constructor Function

// Before ES6 classes:
// function User(name) {
//     this.name = name;
// }

// const u1 = new User("Rahul");
// console.log(u1); //give u1 object with { name: 'ashish'}

// What does new do?
// Answer:
// Creates a new object.
// Sets prototype.
// Binds this.
// Returns object.





// Encapsulation
// Hiding internal details.
// Encapsulation means "bundling data and methods" together while restricting direct access to internal state.

// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const acc = new BankAccount();
// acc.deposit(1000);
// console.log(acc.getBalance());






//Inheritance
// One class acquires properties of another.
// class Animal {
//   eat(){
//     console.log("eating...");
//   }
// }

// class Dog extends Animal {
//   bark(){
//     console.log("barking...");
//   }
// }

// const obj = new Dog();
// obj.eat();
// obj.bark();





// Polymorphism
// Same method behaves differently.
//it allows same method to have different implementations.

// class Animal {
//     sound() {
//         console.log("Animal sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Bark");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Meow");
//     }
// }

// const animals = [ new Dog(), new Cat() ];
// animals.forEach(a => a.sound());   //Bark Meow





//Abstraction
// JavaScript doesn't have true abstract classes. but abstraction can be achieved using conventions, errors.

// Common pattern:

// class Shape {
//     constructor() {
//         if (this.constructor === Shape) {
//             throw new Error("Cannot instantiate Shape");
//         }
//     }
// }

// Now:
// new Shape();     // Throws error.






// super() Keyword 

// Calls parent constructor.

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);

//         this.breed = breed;
//     }
// }

// const d = new Dog("Tommy", "Labrador");

// Interview:

// super() must be called before using this inside "a derived class constructor"





// Static Methods

// Belong to class, not instance.

// class MathUtil {
//     static add(a, b) {
//         return a + b;
//     }
// }

// MathUtil.add(1,3);    //bleong to class


// const m = new MathUtil();    //not to object
// m.add(); // Error






//----------Prototypes 
{
// Object.create() used to create new object with specified prototype object
// Object.getPrototypeOf() returns the prototype of specified object
// prototypal inheritance

// const parent = { a: 1 };
// const child = Object.create(parent);
// console.log(Object.getPrototypeOf(child))   // object return hoga
// console.log(child.__proto__)               // same as above
// console.log(child.a)                      // 1 from prototype
// console.log(child)                       //child is still undefined
                                

// parent become prototype of child. child can access properties and method from parent    






// prototype confusion clear 


// Rule 1: Every object has an internal prototype
// const parent = {
//     name: "Ashish"
// };

// const child = Object.create(parent);

// JS creates:
// child
//   ↓
// parent
//   ↓
// Object.prototype
//   ↓
// null

// So:
// Object.getPrototypeOf(child) === parent //true
// child.__proto__ === parent //true


// Rule 2: .prototype is NOT the same as __proto__


// function User() {}

// JavaScript automatically creates:
// User.prototype     a function object

// console.log(typeof User);            // function
// console.log(typeof User.prototype);  // object

// which is an object:
// {
//    constructor: User
// }

// So:
// console.log(User.prototype);

// outputs something like:
// {
//   constructor: f User()
// }

// NOT undefined.





// When you create a class
// class Demo {}

// JavaScript also creates a function object.

// Many developers don't realize this:

// class Demo {}

// console.log(typeof Demo);  //function

// When you create an instance
// const obj = new Demo();

// JS creates:
// const obj = {};

// Then sets:
// obj.__proto__ = Demo.prototype;   //Demo.prototype function object has all method and varibales , so object acess it obj.functioname

// So the chain becomes:

// obj
//  ↓
// Demo.prototype
//  ↓
// Object.prototype
//  ↓
// null

//Both functions and classes are themselves objects in JavaScript.


// Everything below is true:

// function User(){}
// User.myName = "Ashish";
// console.log(User.myName);   //Ashish
// class User(){}
// User.myName = "Ashish";
// console.log(User.myName);   //Ashish




//prototype chaining and method sharing


// class User {
//     greet() {
//         console.log("Hello");
//     }
// }

// Internally similar to:

// function User(){}
// User.prototype.greet = function() {
//    console.log("Hello");
// };

// So:
// console.log(User.prototype);

// gives:
// {
//    constructor: User,
//    greet: f
// }

// NOT undefined.



//Every function/class in JavaScript has a prototype property that "points to an object". When we create an instance using new, JavaScript sets the instance's internal prototype ([[Prototype]] or __proto__) to that prototype object. This enables prototype chaining and method sharing.
//only functions/classes have a .prototype property. object does not have it. child.__proto__ = parent , not parent.prototype
// JavaScript is a prototype-based language. Every object has an internal prototype ([[Prototype]], accessible via __proto__ or Object.getPrototypeOf()), which forms a prototype chain used for property and method lookup. Functions and classes in JavaScript are themselves objects, and each function/class automatically has a special prototype property that points to another object. When we create an instance using the new keyword, JavaScript creates a new object, sets the instance's internal prototype (__proto__) to the constructor's prototype object, executes the constructor with this bound to the new object, and returns the object. Therefore, instance.__proto__ === Constructor.prototype is true. Methods defined inside a class are stored on ClassName.prototype, not copied into every instance, which enables memory-efficient method sharing. When a property or method is accessed, JavaScript first searches the object itself; if not found, it follows the prototype chain (object → Constructor.prototype → Object.prototype → null) until the property is found or the chain ends. This mechanism is called prototype chaining and is the foundation of inheritance in JavaScript. Classes are essentially syntactic sugar over this prototype system.

}




