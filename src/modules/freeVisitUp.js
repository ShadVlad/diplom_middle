const freeVisitUp = () => {
  const openPopUp = document.querySelector(".open-popup"),
    freeVisitForm = document.getElementById("free_visit_form");

  openPopUp.addEventListener("click", (event) => {
    freeVisitForm.style.display = "block";
  });

  freeVisitForm.addEventListener("click", (event) => {
    let target = event.target,
      targetClose = target.closest(".close-form"),
      targetContent = target.closest(".form-content");
    console.log("target: ", target);
    if (
      target.closest(".input-text") ||
      target.closest(".personal-data") ||
      target.closest(".btn-send")
    ) {
      console.log("target: ", target);
    } else if (targetClose || targetContent) {
      freeVisitForm.style.display = "none";
    }
  });
};

export default freeVisitUp;
