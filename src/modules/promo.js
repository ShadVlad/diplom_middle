const promo = () => {
  const priceMessage = document.querySelector(".price-message"),
    inputPromo = priceMessage.querySelector("input"),
    totalPrice = document.getElementById("price-total");
  console.log("inputPromo: ", inputPromo);
  totalPrice.textContent = (totalPrice.textContent * 0.3).toFixed(2);
  inputPromo.addEventListener("change", () => {
    console.log("valueChange");
    if (inputPromo.value == "ТЕЛО2020") {
      totalPrice.textContent = (totalPrice.textContent * 0.3).toFixed(2);
    }
  });
};

export default promo;
