const prices = [100, null, 250, undefined, 0, 500, null];
const validPrices = prices.filter(e => e != null);
const validPrices2 = prices.filter(e => e !== null && e !== undefined);
const validPrices3 = prices.filter(Number.isFinite);
const validPrices4 = prices.filter(e => typeof e === 'number');
console.log(validPrices);
console.log(validPrices2);
console.log(validPrices3);
console.log(validPrices4);
//

const candidates = [
    { name: "Bruno", dept: "DEV", score: 101 },
    { name: "BalleLicker", dept: "Sales", score: 85 },
    { name: "Kok-Succa", dept: "IT", score: 49 },
    { name: "Aym-Kumin", dept: "Sales", score: 70 },
    { name: "Xi-Faaks", dept: "Sales", score: 80.1 }
];

const promoTables = candidates.filter(e => e.dept === "Sales" && e.score > 80);
console.log(promoTables);

// or

const promoTables2 = candidates.filter(e => e.dept === "Sales" && e.score > 80).map(e => e.name);
console.log(promoTables2);

// or

const promoTables3 = candidates.reduce((acc, e) => {
    if (e.dept === "Sales" && e.score > 80) acc.push(e.name);
    return acc;
}, []);

console.log(promoTables3);

//

const logs = [
  "System started",
  "Error: Connection failed",
  "User logged in",
  "Critical Error: Database down",
  "Warning: High memory"
];

const errors = logs.filter(e => e.includes("Error"));
console.log(errors);