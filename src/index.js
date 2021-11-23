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

// const name = "たろう";
// const age = "24";

// const message1 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message1);

// // 従来の書き方

// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// // アロー関数
// const fun2 = (str) => {
//   return str;
// };

// console.log(fun2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃけ",
//   age: 28,
// };

// console.log(myProfile);

// const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 =`名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列
// const myProfile = ["じゃけ",28];

// const message1 = `名前は${myProfile[0]}です。年齢は、${myProfile[1]}歳です`;
// console.log(message1);

// const [name,age] = myProfile;
// const message4 =`名前は${name}です。年は${age}歳です。`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("じゃ");

// スプレッド構文

// 配列の展開
// const sum = [1, 2];
// console.log(sum);
// console.log(...sum);

// const sumFUnc = (num1, num2) => console.log(num1 + num2 );
// sumFUnc(sum[0],sum[1]);
// sumFUnc(...sum);

// 配列まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー 結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// 結合
// const arr7 = [...arr4, ...arr5 ];
// console.log(arr7);

// for文
// const nameArr =["田中", "山田", "じゃけ"];
// for (let index = 0; index < nameArr.length; indeｘ++){
//   console.log(nameArr[index]);
// }

// nameArr.map( (name, index) => console.log(`${index + 1 }番目は、${name}です`));

// // フィルター
// const numArr = [1,2,3,4,5];
// const newNum = numArr.filter( (num) => {
//   return num % 2 === 0;
// });
// console.log(newNum);

// 三項演算子
// ある条件？ 条件がtrueの時 : 条件がfalseの時d
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えてるぞい" : "100以下だぞい";
};
console.log(checkSum(600, 200));
