for(let i = 1; i <= 10; i++){
  //console.log(i);
};
//1.I have displayed numbers form 1 to 10.

for(let i = 0; i < 100; i++){
  if(i % 2 === 1){
    //console.log(i)
  }
};//2.Printed the odd numbers less than 100.

for(let i = 1; i <= 10; i++){
  const num = 7;
  const res = i * num;
  //console.log(`${num} * ${i} = ${res}`);
};//3.Multiplication table with 7.

for(let i = 1; i <= 10; i++){
  for(let j = 1; j <= 10; j++){
    let res1 = i * j;
    //console.log(`${i} * ${j} = ${res1}`)
 } 
};//4.Printed all the multiplication tables with numbers from 1 to 10.

let total = 0;
for (let i = 1; i <=10; i ++){
  total += i;
} //console.log(`The sum of numbers from 1 to 10 is ${total}`);
//5.Calculated the sum of numbers from 1 to 10.

const sum1 = [5];
const pop = sum1.map(sum2 => {return sum2 + sum2});
//console.log(pop);
//6.Added 5 to 5 and received 10.

let jora = 0;
for(let a = 10; a < 30; a++){
  if(a % 2 === 1){
  jora += a;
 }
}//console.log(`The sum of odd numbers is ${jora}.`);
//7.Calculated the sum of odd numbers between 10 and 30.

const arr = [45, 34, 12, 22, 20];
let arr1 = 0;
for(let i = 0; i < arr.length; i++){
  arr1 += arr[i];
}//console.log(`The sum of numbers from array is ${arr1}.`);
//8.Calculated the sum of numbers from array using a for loop.

const array = [48, 23, 85, 13];
let added = 0;
for(let i = 0; i < array.length; i++){
  added += array[i];
} let avg = added / array.length;
//console.log(`The average number of my array is ${avg}.`);
//9.Calculated the average of numbers in my array.


let pos = [-1, 22, 5, -3.4, -5, 97];
const rez = pos.filter(buda => {
  return buda > -1;
});
//console.log(`The positive numbers in my array are ${rez}.`);
//10.Extracted the positive numbers to a new array.

let dub = [34, 23, 85, 43, 1, 96];

const reff = dub.reduce((olan, deep) => {
  return Math.max(olan, deep);
});//console.log(`The maximum number in my array is ${reff}.`)
//11.Extracted the maximum number from my array.

function prime(num) {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;          
  }
  return  true;
}; //console.log(prime(11));
//12.Created a boolean specifyin if a number is prime but didn't really understood how it works.


let numas = 457;
let get = 0;
while(numas > 0){
  let getto = numas % 10;
  get += getto;
  numas = Math.floor(numas / 10);
}//console.log(`The sum of digits of my integer number is ${get}.`)
//13.Calculated the sum of digits of my integer numbers with while.



//14.????????????????????????????




let newArray = [24, 56, 34, 87, 90];
let secondArray = newArray.shift();
newArray.push(24);
//console.log(newArray);
//15.Rotated the array one position to the left.


let kongo = ['psy','jumbo','kroko','dodo','leo'];
kongo.reverse();
//console.log(`I reversed an array and got ${kongo}`);
//16.Reversed the array.


const funer = [4,5,6];
const stuner = [45, 56, 87];
const kiew = funer.map(ter => {
  return funer.concat(stuner);
});
//console.log(kiew[0]);
//17. Merged two arrays in one.


const majes = [0, 1, 4, 5,];
const tatea = [2, 3, 4, 5];

const w = majes.filter(w => !tatea.includes(w));
const p = tatea.filter(w =>!majes.includes(w));    const tt = w.concat(p);
//console.log(tt);
//18.Found the symmetric difference between arrays.

  

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
//console.log(uniqueAges);
//19.Received the distinct numbers from my array.


function words(count) { 
  return count.split(" ").length;
}
//console.log(words("hey you there"));
//20.Calculated the number of words in my array.



