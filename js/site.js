var totalPrice = 0;

window.onload = function () {
  const products = {};
  

  function GetProductList() {
    //listeleme işlemi
  }

  GetProductList();
};

function CalculatePrice(price){
  totalPrice += price;
  var karpuz = document.getElementById('enSonSonuc');
  karpuz.innerHTML = totalPrice;
}