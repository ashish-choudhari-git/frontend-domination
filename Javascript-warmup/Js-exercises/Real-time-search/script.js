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