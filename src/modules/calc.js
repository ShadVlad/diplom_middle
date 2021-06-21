import { dbCards } from "../DBCards";

const calc = () => {
  const cardOrder = document.getElementById("card_order"),
    //docMozaika = document.getElementById("mozaika"),
    calcTime = cardOrder.querySelector(".time"),
    calcClub = cardOrder.querySelectorAll(".club");
  //console.log("calcClub: ", calcClub);

  let inputCheckedTime, inputCheckedClub;

  const isCheked = (elem) => {
    return elem.querySelector("input:checked");
  };

  cardOrder.addEventListener("click", (e) => {
    if (e.detail != 0) {
      return;
    }
    let target = e.target;
    if (target.closest(".time")) {
      inputCheckedTime = isCheked(calcTime);
      console.log("inputChecked: ", inputCheckedTime);
    }
    if (target.closest(".club")) {
      calcClub.forEach((club) => {
        if (isCheked(club) != null) {
          inputCheckedClub = isCheked(club);
        }
      });
      console.log("inputChecked: ", inputCheckedClub);
    }
  });
};

export default calc;
