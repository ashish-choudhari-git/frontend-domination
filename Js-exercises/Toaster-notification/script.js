

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



