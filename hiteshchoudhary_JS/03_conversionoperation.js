// let score = null;
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// // "33" => 33
// // "33abc" => NAN
// // true => 1; false => 0

let data = [
    {
        "name" : "Azhar",
        "job"  : "Youtuber",
        "location" : {
            "city" : "Kolkata",
            "state" : "WB"
        }
    },
    {
        "name" : "Arun",
        "job"  : "SE",
        "city" : "Bangalore",
        "state" : "Karnataka"    
    },
    {
        "name" : "Mr.Beast",
        "job"  : "YouTuber",
        "location":{
            "address" : {
            "city" : "NewYork",
            "state" : "US"
            }
        }
    }
]

function recursive(obj){
    for(prop in obj){
        if(typeof(obj[prop])== "object"){
            recursive(obj[prop])
        } else {
            if(prop == "name" || prop == "job" || prop == "city"){
                console.log(prop+" : "+obj[prop])
            }
        }
    }
}

data.filter(item=> {
    recursive(item)
 })
// let userobj = {
//     name:'john',
//     email:'john@gmail.com'
// };
// function isEmpty(userobj){
//     for(let key in userobj){
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty(userobj));
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   function calcSalary(){
//     let sum = 0;
//     for(let key in salaries){
//       sum+=salaries[key];
//     }
//     return sum;
//   }
// console.log(calcSalary());

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
  
//  multiplyNumeric(menu);
//  console.log(menu);

//  let a = {};
// let b = a; // copy the reference

// console.log(( b == a )); // true, both variables reference the same object
// console.log(( b === a )); // true

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// let clone = {};
// Object.assign(clone,user);
// console.log(clone);
// user.sizes.height = 60;
// user.name = "Amar"
// console.log(clone);
// for(let key in user){
//     clone[key] = user[key];
// }
// clone.name ="Pete";
// console.log(clone);
// console.log(user);
// To avoid changes in clone we use structured method 


// let structuser = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
// let copyclone = structuredClone(structuser);
// structuser.sizes.height = 60;
// structuser.name = "Amar"
// console.log(copyclone);

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let usere = makeUser();
//     console.log(( usere.ref.name )); // What's the result?

//     function makeUser() {
//         return {
//           name: "John",
//           ref(){
//            return this;
//           } 
//         };
//       }
    //   let users = makeUser();
    //     console.log(( users.ref().name ));
    
    //     let calculator = {
    //        sum(){
    //         return this.a + this.b;
    //        },
    //        mul(){
    //     return this.a * this.b;
    //        },
    //     //    read(){
    //     //     this.a = +prompt('a?',0);
    //     //     this.b = +prompt('b?',0);
    //     //    }
    //       };
          
    //       console.log( calculator.sum() );
    //       console.log( calculator.mul() )

//           function User(){
//             console.log(new.target);
//           }
//           User();
//           new User();

//           let obj = {};
// function A() { 
//     return obj; 
// }
// function B() {
//      return obj;
// }
// console.log( new A() == new B() ); 
// console.log(A() == B());
// function x(n) {
//   if (n < 0) {
//     return null;
//   }
//   let fibonacci = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }
//   return fibonacci;
// // }
// // console.log(x(10));
// function fibonnaci(n){
//    if(n < 0) return null;
//    if(n === 1){
//     return [0,1];
//    }
//    let fibonacciseries = fibonnaci(n-1);
//    fibonacciseries.push(fibonacciseries[fibonacciseries.length - 1]+fibonacciseries[fibonacciseries.length - 2]);
//    return fibonacciseries;
// }
// console.log(fibonnaci(3));
// let arrs = ["a","b"];
// arrs.push(function(){
//   console.log(this);
// });
// // arrs[2]();

// function palindromenum(n){
//   let palindrome = n.toString().split('');
//   let result = palindrome.slice().reverse();
//     for(let i = 0;i<=palindrome.length;i++){
//       for(let j = 0;j<=result.length;j++){
//           if(palindrome[i] == result[j]) return true;
//           else return false;
//       }
//   }
// }
// // console.log(palindromenum(234));
// let objectadd = [1,2];
// let arraylike = {
//   0:"something",
//   1:"else",
//   [Symbol.isConcatSpreadable]:true,
//   length:2
// };
// console.log(objectadd.concat(arraylike));


// function camelize(str){
//    let camel = str.split('-')
//    .map((word,index)=>index == 0?word:word[0].toUpperCase() + word.slice(1)
//   ).join('');
//   console.log(camel);
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function filterRange( arr,a, b){
//    return arr.filter(item=>(item>a && item < b));
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr,1,8);
// console.log(filtered);
// console.log(arr);

// function filterRangeInPlace( arrNUM,a, b){
//   return arrNUM.filter(item=>(item!=a && item!=b));
// }
// let arrNUM = [5, 3, 8, 1];
// let filteredDouble = filterRangeInPlace(arrNUM,3,5);
// console.log(filteredDouble);
// console.log(arrNUM);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john,pete,mary];
// let names = users.map(item=>item.name);
// console.log(names);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// let usersMapped = users.map(user=>({
//   fullName:`${user.name} ${user.surname}`,
//   id:user.id
// }));

// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);


// function getAverageAge(users){
//   return users.reduce((prev,user)=>prev + user.age,0)/users.length ;
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john,pete,mary];
// console.log(getAverageAge(arr));



// function groupById(array){
//    return array.reduce((obj,value)=>{
//     obj[value.id] = value;
//     return obj;
//    },{})
// }
// let users = [
//   {id:'john',name:"John Smith",age:20},
//   {id:'ann',name:"Ann Smith",age:24},
//   {id:'pete',name:"Pete Peterson",age:31},
// ];

// console.log(groupById(users));


// function unique(arr) {
//   return arr.filter((value,index)=>arr.indexOf(value) === index); 
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

// function unique(arr) {
//   return Array.from(new Set(arr));
// }


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare, Krishna, :-O

// let prices = {
//   banana:1,
//   orange:2,
//   meat:4,
// };
// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map(entry=>[entry[0],entry[1] * 2])
// );
// console.log(doublePrices);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// let maxSalary = Object.values(salaries);
// let max = Math.max(...maxSalary);
// console.log(max); // 650


// let user = {
//   name:'John',
//   age:30
// };

// function count(obj){
// let count = 0;
//  for(let key of Object.keys(user)){
//     count++;
//  }
// return count;
// }
// console.log(count(user));

// let destructureuser = { name: "John", years: 30 };
// let {name,years:age,isAdmin=false} = destructureuser;
// console.log(name);
// console.log(age);
// console.log(isAdmin);


console.log(foo);
var foo = 5;