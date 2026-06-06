import React, { useState, useEffect } from 'react';


//CASE 2 : Empty dependency Array
export default function Parent() {
  const [count, setCount] = useState(0);

  console.log("Render");

  useEffect(() => {
    console.log("Effect");
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

//CASE 1 : No dependency Array

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect");
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};



//CASE 3 : dependency Array with values

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Ashish");

//   console.log("Render");

//   useEffect(() => {
//     console.log("Effect");
//   }, [count]);

//   Run the effect after the initial render and whenever count changes.

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Count
//       </button>

//       <button onClick={() => setName("Rahul")}>
//         Name
//       </button>
//     </>
//   );
// }







//---------- Cleanup function 

// it run before effect rerun and when component unmount

// {
// useEffect(() => {
//   console.log("Effect Started");

//   return () => {
//     console.log("Cleanup");
//   };
// }, [count]);


// // Initial render: "effect started "

// // Count changes:
// // React does:
// // Cleanup old effect
// // ↓
// // Run new effect

// // Output:
// // Cleanup
// // Effect Started

// // Component unmount:
// // Cleanup




// useEffect(() => {
//   const id = setInterval(() => {
//     console.log("Running");
//   }, 1000);

//   return () => clearInterval(id);
// }, []);

// //without cleanup -> memory leak , performance issues
//  }




//---------------Stale Closure

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       console.log(count);
//     }, 1000);
//   }, []);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }

// butto 5 bar dabane pe
// Console me:
// 0
// 0
// 0
// 0

//setInterval ek function hai jo apne parent function ke varibale ko captura karta, aur use karta to ye closure hua
//yaha pe jab initial render hua to count = 0 tha, effect chala to usne interval create kiya aur interval callback ne count =0 value capture kiya. uske baad empty DA ke vajah se wo kabhi rerun nahi hua isliye wo previous value use karta raha. rerender -> new variable , new scope 

// A closure is a function bundled together with the variables from the scope in which it was created.

// Solution : Dependency array prop pass and useRef

// 1. DA
// useEffect(() => {
//     let timer = setInterval(() => {
//       console.log(count);
//     }, 1000);

//     return function(){
//        clearInterval(timer);
//     }
//   }, [count]);

// coutn change -> cleanu function run -> effect run 



// 2. useRef

// function App() {
//   const [count, setCount] = useState(0);

//   const normalObj = { current: 0 };
//   const refObj = useRef(0);

//   return (
//     <>
//       <button
//         onClick={() => {
//           normalObj.current++;
//           refObj.current++;

//           console.log(
//             normalObj.current,
//             refObj.current
//           );
//         }}
//       >
//         Update
//       </button>

//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Re-render
//       </button>
//     </>
//   );
// }

// Click update: 1 1
// Click update: 2 2 
// Click update: 3 3
// Click rerender: 1 3
// Click update: 2 4    

// useRef value persists across render
// normal variable or object are recreated on  every render.
//changing useRef value does not cause rerender
//changing normal variable or object value does not cause rerender
// all renders share same object refrecne, so stale closure always gets latest value