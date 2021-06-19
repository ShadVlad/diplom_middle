const toggleModal = (form) => {
  form.addEventListener("click", (event) => {
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
      form.style.display = "none";
    }
  });
};

export default toggleModal;
