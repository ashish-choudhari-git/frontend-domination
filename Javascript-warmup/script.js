//() {} [] are reference , rest are primitive
/*

// Data types in Javascript 

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
// const person ={ "name" : "ashi", age : 18, greet : function(){
//   console.log(person.name);
// }};

// console.log(person.greet());
// console.log(person["name"]);

//2. 
// const proto = { greet() { return "hi"; } };   // , je baad function bhi likh skte
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

let num = new Set([1,2,2,3]);    // only unique elem
// console.log(num);

// num.add(4);
// num.add([4,5]);
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

//get set delete has


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
//higher order function - jo fucntion dusra fun return ya accept kare
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
// it is behaviour of js  of movin varibales and function declaration to top 

// only declration is hoisted , not initialization
// fucntion declartionn - can be called before declaration        abcd() function abcd(){ -- }
// function expressions are NOT hoisted      let ans = function(){ --}








//IIFE are used for private variable

// let ash = (function(){
//   let balance = 0;  // we cant acces balance varibale directly
//   return {
//     getBalance : function(){
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

// arr.sort().reverse(); 

//descending ke liye arr.sort().reverse()  yes, kaam karta hai
// console.log(arr);

//reduce


// let red = [1,2];

// .reduce( accumulator, currentvalue, currentindex, array)  array contain inital vlaue for accumulator

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


// reduce find some every map filter 



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
//same textContent, innerText bas text badlta
//outerHTML tag ko bhi select karlega text ke saath

// h1.hidden = true;




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
// h1.remove();







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
let ab = document.querySelector("#abcd");

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
 
// Bubbling means: when an event happens on a child element, it also “bubbles up” and triggers the same event on its parent, then grandparent… up to document.  targeted elem se pure doc tak jayega propagation for sure

// ex1
// parent = document.querySelector("#parent");
// child = document.querySelector("#child");
// parent.addEventListener("click", () => console.log("parent mouseover"));
// child.addEventListener("mouseover", () => console.log("child mouseover"));


// ex2
// ul = document.querySelector("ul");
// ul.addEventListener("click", (dets)=>{
//   dets.target.classList.toggle("lt");
// });
//event start li se hota hai(click event) aur bubble hoke ul tak pahochta hai aur uska bhi event execut ekar deta
//solution is , to stop propagation

// li = document.querySelector("li");
// li.addEventListener("click", (e)=>{
//   e.stopPropagation();
// });





//--------------Event capturing

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


// jab bhi aap click krte ho YA koi bhi event raise krte ho-> to aapka jo EVENT FLOW do phases mein chalta hai:
// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega
// aur pahle phase 1 hoti hati h, pa rwo by default band rhti h,
// if usko on kiya to phase 1 ka result milega then phase 2, both.
//  jo chize pahse 1 me execute ho gai wo phase 2 nai hogi
//capture phase on karle ke liey listener ke last curcly braces ke aage , true likhdo
// ex : objectname.addEventListener("",()=>{}, true);



//event jaha bhi occur kiya, pattern upar se niche ki taraf ayega









//-------EXercise : Live charcter counter
// let inp = document.querySelector("input");
// val = document.querySelector("#val");
// inp.addEventListener("input", (dets)=>{
//   // console.log(dets.target.value.length);

//   let left = 20 - dets.target.value.length;
//   val.textContent = left;

//   if(left < 0){
//     val.style.color = "red";
//   }else{
//     val.style.color = "white";
//   }

// });




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
//Date is object
// const now = new Date();
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






//--------------------LocalStorage, Session Storage , Cookies

// localStorage-> browser me data store karna ~5MB 
// sessionStorage -> data temporarily store karta hai
// cookier -> store data in less amount    ~4kb




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

//dynamic scoping js me nahi hoti .
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






