const toggleGift = () => {
  const giftBtn = document.querySelector(".fixed-gift"),
    giftPopUp = document.getElementById("gift");
  //console.log("giftPopUp: ", giftPopUp);

  giftBtn.addEventListener("click", (event) => {
    giftBtn.style.display = "none";
    giftPopUp.style.display = "block";
  });
  giftPopUp.addEventListener("click", (event) => {
    //giftBtn.style.display = "none";
    giftPopUp.style.display = "none";
  });
};

export default toggleGift;
