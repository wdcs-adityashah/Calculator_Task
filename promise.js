// function getData(dataId,getNextData){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//   })
// }
// console.log("fetching data1...");
//  asyncFunc1().then((res)=>{
//   console.log("fetching data2....");
// asyncFunc2().then((res)=>{

//   })
// })
// async function getAllData(){
//   console.log("getting data1....");
//   await getData(1);
//   console.log("getting data2....");
//   await getData(2);
//   console.log("getting data3....");
//   await getData(3);
// }
// (async function getAllData(){
//   console.log("getting data1....");
//   await getData(1);
//   console.log("getting data2....");
//   await getData(2);
//   console.log("getting data3....");
//   await getData(3);
// })()

// const cart = ["shoes","pants","kurta"];
// createOrder,
// proceedToPayment,
// showOrderSummary,
// updateWallet
// createOrder(cart)
// .then(function (orderId) {
//   console.log(orderId);
//   return orderId;
// })
// .catch(function(err){
//   console.log(err.message);
// })
// .then(function(orderId){
//   return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//   console.log(paymentInfo);
// })
// .catch(function(err){
//   console.log(err.message);
// })
// .then(function(orderId){
//   console.log("No matter what happens,I will definitely called")
// })

const p1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 10000);
});

const p2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Promise Resolved Value2!!");
  }, 5000);
});

const p3 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Promise Resolved Value3!!");
  }, 8000);
});
async function handlePromise(){
  console.log("Hello world");
  const val = await p1;
  console.log("Namaste Javascript");
  console.log(val);

  console.log("After promise")
  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);

  const val3 = await p3;
  console.log("Namaste Javascript 3");
  console.log(val3);
}
handlePromise();
