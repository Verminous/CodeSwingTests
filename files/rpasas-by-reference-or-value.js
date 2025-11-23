let myMoney = 100;
function spendMoney(cash) {
  cash = 0;
  console.log("Inside function: " + cash);
}
spendMoney(myMoney);
console.log("Outside function: " + myMoney);

////////////

const myHouse = {
  color: "red",
};
function changeColor(obj) {
  obj.color = "blue";
}
changeColor(myHouse);
console.log(myHouse);

/////////////

function rename(user) {
  user = { name: "Sarah" };
}

let user = { name: "Bruno" };
rename(user);
console.log(user.name);
