// var vall = "var変数";
// console.log(vall);

// vall  = "test";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2)

// const val4 = {
//   name: "じゃけ",
//   age: 28,
// };

// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5.push("mounkey");
// console.log(val5);

const name = "たろう";
const age = "24";

const message1 = `私の名前は${name}です。年齢は${age}です。`;

console.log(message1);

// 従来の書き方

function func1(str) {
  return str;
}

console.log(func1("func1です"));

// アロー関数
const fun2 = (str) => {
  return str;
};

console.log(fun2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
