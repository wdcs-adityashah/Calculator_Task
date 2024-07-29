
    let user = { };
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
    console.log(user);
       
    function isEmpty(obj){
        
        for(let key in obj){
            return false;
        }
        return true;
    }
    console.log(isEmpty(user))
    let salaries = {
        John:100,
        Ann:160,
        Pete:390
    };
    let sum = 0;
     for(let key in salaries){
        sum+=salaries[key];
     }
console.log(sum);
let str = 'Widget with id';
console.log(( str.indexOf('id', 0))); 
function ucfirst(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);

}
console.log(ucfirst("john"));
function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("XXX")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("asdsdsdf"));
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + " ..."; // Concatenate strings
    } else {
        return str;
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // Should return "Hello ..."
console.log(truncate("Hi everyone!", 20)); // Should return "This is a ..."

function extractCurrencyValue(str){
    return +str.slice(1);
}
console.log(extractCurrencyValue("$120"));

let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1)/2)] = "Classics";
styles.shift();
styles.unshift("Rap","Reggae");
console.log(styles);

// function sumInput(){
//     let firstNum = +prompt("Enter the first number");
//     let secondNum = +prompt("Enter the second number");
//     let sum = firstNum + secondNum;
//     return sum;
// }
// let result = sumInput(); // Call the function and store the result
// console.log("The sum is: " + result); // Display the sum

var array = [
    {
      "name": "John",
      "age": 30,
      "contacts": [
        {
          "type": "email",
          "value": "john@example.com"
        },
        {
          "type": "phone",
          "value": "123-456-7890"
        }
      ],
      "friends": [
        {
          "name": "Alice",
          "age": 28,
          "interests": ["reading", "cooking"]
        },
        {
          "name": "Bob",
          "age": 32,
          "interests": ["hiking", "photography"]
        }
      ]
    },
    {
      "name": "Emily",
      "age": 25,
      "contacts": [
        {
          "type": "email",
          "value": "emily@example.com"
        },
        {
          "type": "phone",
          "value": "987-654-3210"
        }
      ],
      "friends": [
        {
          "name": "Charlie",
          "age": 27,
          "interests": ["painting", "traveling"]
        },
        {
          "name": "David",
          "age": 29,
          "interests": ["gardening", "writing"]
        }
      ]
    }
  ];
  console.log(array[1].name,array[1].age);

  // Define product data
const products = [
    {
      name: "Laptop",
      category: "Electronics",
      subcategory: "Computers"
    },
    {
      name: "Headphones",
      category: "Electronics",
      subcategory: "Audio"
    },
    {
      name: "T-shirt",
      category: "Clothing",
      subcategory: "Casual"
    },
    {
      name: "Smartphone",
      category: "Electronics",
      subcategory: "Mobile"
    },
    {
      name: "Jeans",
      category: "Clothing",
      subcategory: "Denim"
    }
  ];
  console.log(products.slice(0,5).map(product=>product.name));
  var a = [1,2,3];
  var c = a[2];
   a[2] = a[0];
    a[0] = c;
  console.log(a);
//   function count(obj) {
//     let user = {
//         name: 'John',
//         age: 30,
//         subcategory: "Denim"
//       };
//       let count = 0;
//       for (let value of Object.entries(user)) {
//        count++; // John, then 30
//       }
//     return count; // 650
//   }
//   console.log(count(user));
var users = {
    name: 'John',
    age: 30
  };
  
  function count(obj) {
    return Object.keys(obj).length;
  }
  console.log(( count(users) ));

//   let person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA",
//       postalCode: "10001"
//     },
//     preferences: {
//       theme: "dark",
//       language: "en"
//     }
//   };

//   let { name, address: { city }, preferences: { theme } } = important;

// console.log(name); // John
// console.log(city); // New York
// console.log(theme); // dark
// console.log(person);
// console.log(important);

var superComplexArray = [
    {
      "name": "John",
      "age": 30,
      "contacts": [
        {
          "type": "email",
          "value": "john@example.com",
          "verified": true
        },
        {
          "type": "phone",
          "value": "123-456-7890",
          "verified": false
        }
      ],
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
      },
      "friends": [
        {
          "name": "Alice",
          "age": 28,
          "interests": ["reading", "cooking"],
          "family": {
            "relation": "sister",
            "age": 25
          }
        },
        {
          "name": "Bob",
          "age": 32,
          "interests": ["hiking", "photography"],
          "family": {
            "relation": "brother",
            "age": 30
          },
          "pets": [
            {
              "name": "Rover",
              "species": "dog",
              "age": 5
            },
            {
              "name": "Whiskers",
              "species": "cat",
              "age": 3
            }
          ]
        }
      ]
    },
    {
      "name": "Emily",
      "age": 25,
      "contacts": [
        {
          "type": "email",
          "value": "emily@example.com",
          "verified": true
        },
        {
          "type": "phone",
          "value": "987-654-3210",
          "verified": true
        }
      ],
      "address": {
        "street": "456 Elm St",
        "city": "Sometown",
        "country": "Canada"
      },
      "friends": [
        {
          "name": "Charlie",
          "age": 27,
          "interests": ["painting", "traveling"],
          "family": {
            "relation": "cousin",
            "age": 26
          }
        },
        {
          "name": "David",
          "age": 29,
          "interests": ["gardening", "writing"],
          "family": {
            "relation": "uncle",
            "age": 45
          },
          "pets": [
            {
              "name": "Fluffy",
              "species": "rabbit",
              "age": 2
            }
          ]
        }
      ]
    }
  ];
  console.log(superComplexArray[0].friends[1].pets[1].species = "buffalo");
  
  let multiarrays = [
  [1, 2, 4],
  [4, 5, 7],
  [8, 9, 8]
  ];
  let rows = 3;
  let columns = 3;
  let result = [rows,columns];
  let left_diagonal_sum = 0;
for (let i = 0; i < rows; i++) {
    left_diagonal_sum += multiarrays[i][i];
}
console.log(left_diagonal_sum);
let right_diagonal_sum = 0;
  for (let i = 0; i < rows; i++){
  for(let j = columns - 1; j >= 0; j--){
    if (i + j === columns - 1) {
      right_diagonal_sum += multiarrays[i][j];
    }
  }
}
console.log(right_diagonal_sum);
let net_sum = Math.abs(left_diagonal_sum - right_diagonal_sum);
console.log(net_sum);
let calcarr = [1,3,-1,-9,0];
let positive_count = 0;
let negative_count = 0;
let Zero_count = 0;
for(let i = 0;i<calcarr.length;i++){
       if(calcarr[i] > 0){
        positive_count++;
       }
       if(calcarr[i] < 0){
        negative_count++;
       }
       if(calcarr[i] == 0){
        Zero_count++;
       }
     
}
let total_length = calcarr.length
let positive_ratio = positive_count/total_length;
let negative_ratio = negative_count/total_length;
let Zero_ratio = Zero_count/total_length;
console.log(positive_ratio);
console.log(negative_ratio);
console.log(Zero_ratio);
// let n = 6;
// for (let i = 0; i < n; i++) {
//     for (let k = n; k > i; k--) {
//         document.write("&nbsp;&nbsp;");
//     }
//     for (let j = 0; j <= i; j++) {
//         document.write("#");
//     }
//     document.write("<br>");
// }
let minmaxarr = [1,3,5,7,9];
let summinmax = 0;
for(let x of minmaxarr){
  if(x == minmaxarr[0]){
    continue;
  }
  summinmax += x;
}
console.log(summinmax);
let candleheights = [1,3,3,2];
let maxnum = candleheights[0];
let max_count = 0;
for(let i = 0;i<candleheights.length;i++){
  if(maxnum < candleheights[i]){
    maxnum = candleheights[i];
    max_count = 1;
  }
  else if (maxnum === candleheights[i]) {
    max_count++;
  }
}
console.log(max_count);
let secondlargest = [1, 4, 8, 9, 34, 56, 120];
let max_num = secondlargest[0];
let x = Number.MIN_SAFE_INTEGER; // Initialize x with the smallest possible value
console.log(x);
for (let i = 0; i < secondlargest.length; i++) {
    if (secondlargest[i] > max_num) {
        x = max_num; // Update x with the previous max_num
        max_num = secondlargest[i]; // Update max_num with the new maximum
    } else if (secondlargest[i] > x && secondlargest[i] < max_num) {
        x = secondlargest[i]; // Update x with the second largest value
    }
}

console.log(max_num);
console.log(x);
let string_calc = ["apple","banana","mangoes","pineappleksdhdshidnkidhn"];
let longeststring = string_calc[0];
for(let i = 0;i<string_calc.length;i++){
        if(longeststring < string_calc[i]){
          longeststring = string_calc[i];
        }
}
console.log(longeststring);

function vowelcount(str){
  let count = 0;
  let vowelstring = ['a','e','i','o','u'];
  for(let char of str.toLowerCase()){
    if(vowelstring.includes(char)){
      count++;
    }
  }
  return count;
}
console.log(vowelcount("JAVASCRIPT"));

let arr = [5,6,2,7,10,77,1,101,3];
arr.sort((a, b) => a - b);
console.log(arr[1]);
// const output = arr.reduce((prev,current)=>{
//   return prev > current ? prev : current;
// })
// console.log(output);
let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter((val)=>{
  return val > 90;
}); 
console.log(toppers);

let n = prompt("enter  a number:");
let arrnum = [];
for(let i = 1;i<=n;i++){
  arrnum.push(i);
}
console.log(arrnum);

let sums = arrnum.reduce((acc,current)=>{
  return acc + current;
})
console.log(sums);

let multiply = arrnum.reduce((acc,current)=>{
  return acc*current;
})
console.log(multiply);

// Syncronous means code  runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.
// Due to syncronous programming,sometimes imp instructions get blocked 
//  due to some previous instructions,which causes a delay in The UI.
//  Asyncronous code execution allows to execute next instructions immediately
//  and doesn't block the flow.
//promise is come to solve callback hell