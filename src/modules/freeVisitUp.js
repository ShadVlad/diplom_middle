import toggleModal from "./toggleModal";

const freeVisitUp = () => {
  const openPopUp = document.querySelector(".open-popup"),
    freeVisitForm = document.getElementById("free_visit_form");

  openPopUp.addEventListener("click", (event) => {
    freeVisitForm.style.display = "block";
  });

  toggleModal(freeVisitForm);
};

export default freeVisitUp;
