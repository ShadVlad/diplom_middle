import toggleModal from "./toggleModal";
const callBackUp = () => {
  const callBackBtn = document.querySelector(".callback-btn"),
    callBackFrm = document.getElementById("callback_form");

  callBackBtn.addEventListener("click", (event) => {
    callBackFrm.style.display = "block";
  });

  toggleModal(callBackFrm);
};

export default callBackUp;
