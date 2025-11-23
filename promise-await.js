function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id === 'u_1') resolve({ name: "Bruno" });
    else reject("User not found");
  });
}

// // getUser('u_1')
// //     .then(user => console.log("Success", user))
// //     .catch(err => console.log("Error:", err));

getUser('u_1')
  .then(user => console.log(`Success: ${user.name}`))
  .catch(err => console.log(`Error: ${err}`));

// // getUser('u_1')
// //     .then(user => console.log(`Success: ${user}`))
// //     .catch(err => console.log(`Error: ${err}`));

//----------------------------

// const init = async (id) => {
//   try {
//     let user = { name: "Bruno" }
//     if (id === 'u_1') {
//       console.log(`Success: ${user.name}`)
//     };
//   } catch (e) {
//     console.log(("User not found"))
//   }
// } 

// (async () => { await init('u_1'); })();

const init = async (id) => {
  try {
    const user = await getUser(id);
    console.log(`Success: ${user.name}`)
  } catch (e) {
    console.log((`Error: ${e}`))
  }
}

init('u_1');