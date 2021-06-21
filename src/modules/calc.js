import dbCards from "../DBCards";

const calc = () => {
  const cardOrder = document.getElementById("card_order"),
    calcTime = cardOrder.querySelector(".time"),
    calcClub = cardOrder.querySelectorAll(".club"),
    priceMessage = document.querySelector(".price-message"),
    inputPromo = priceMessage.querySelector("input"),
    calcPrice = document.getElementById("price-total");

  const cardChecked = (checkedTime, checkedClub) => {
    dbCards[checkedClub].filter(function (e) {
      return e.long == checkedTime && e.type == "соло";
    });
  };

  const isCheked = (elem) => {
    return elem.querySelector("input:checked");
  };

  const isPromo = (elem) => {
    if (inputPromo.value == "ТЕЛО2020") {
      calcPrice.textContent = (calcPrice.textContent * 0.7).toFixed(2);
    } else {
      calcPrice.textContent = cardSelect[0]["cost"];
    }
  };

  let inputCheckedTime = isCheked(calcTime),
    inputCheckedClub = isCheked(calcClub[0]);

  let cardSelect = dbCards[inputCheckedClub.value].filter(function (e) {
    return e.long == inputCheckedTime.value && e.type == "соло";
  });

  calcPrice.textContent = cardSelect[0]["cost"];
  isPromo();

  inputPromo.addEventListener("change", () => {
    calcPrice.textContent = cardSelect[0]["cost"];
    isPromo();
  });
  cardOrder.addEventListener("click", (e) => {
    if (e.detail != 0) {
      return;
    }
    let target = e.target;
    if (target.closest(".time")) {
      inputCheckedTime = isCheked(calcTime);
    }
    if (target.closest(".club")) {
      calcClub.forEach((club) => {
        let check = isCheked(club);
        if (check != null) {
          inputCheckedClub = check;
        }
      });
    }

    cardSelect = dbCards[inputCheckedClub.value].filter(function (e) {
      return e.long == inputCheckedTime.value && e.type == "соло";
    });
    calcPrice.textContent = cardSelect[0]["cost"];
    isPromo();
  });
};

export default calc;
