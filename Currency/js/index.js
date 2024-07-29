// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);
// console.log(user);

const cart = ["shoes","pants","kurta"];
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
       showOrderSummary(paymentInfo,function(){
        updateWalletBalance();
       })
    })
});

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
})