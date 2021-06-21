import { dbCards } from "../DBCards";

const calc = () => {
  const cardOrder = document.getElementById("card_order"),
    //docMozaika = document.getElementById("mozaika"),
    calcTime = cardOrder.querySelector(".time");
  //cardMozaika = document.querySelector(".mozaika");
  //console.log("document: ", document);
  console.log("calcTime: ", calcTime);
  //console.log("cardMozaika: ", cardMozaika);

  calcTime.addEventListener("onClick", (e) => {
    console.log("e.detail: ", e.detail);
    let inputChecked = calcTime.querySelector("input:checked");
    console.log("inputChecked: ", inputChecked);
  });
};

export default calc;
