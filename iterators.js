/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
// input code here
const array = ["Taher", "Zainab", "Omar", "Zahraa"];
const engineer = (array) => array.forEach((e) => console.log(`eng.${e}`));
// Testing
//console.log(engineer(array));
/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
const toKWD = (wallets) => wallets.map((amount) => amount * 0.3);
const convertedWallet = toKWD([10, 5, 30, 60, 90]);
// Testing
// console.log(convertedWallet);

/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
const richestWallet = (wallets, maxAmount) =>
  wallets.filter((wallet) => wallet > maxAmount);

const filteredWallets = richestWallet([15, 10, 20, 4], 10);
// Test:
// console.log(filteredWallets);

/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/
const gradesLetter = (grade) => {
  if (grade >= 90) return "A";
  else if (grade >= 80) return "B";
  else if (grade >= 70) return "C";
  else if (grade >= 60) return "D";
  else return "F";
};
const makeLiteralGrade = (grades) => grades.map((grade) => gradesLetter(grade));
console.log(makeLiteralGrade([90, 70, 40]));

// if (grade < 60) return "F";
//     else if (grade < 70) return "D";
//     else if (grade < 80) return "C";
//     else if (grade < 90) return "B";
//     else return "A";
