const toggleModal = (form) => {
  form.addEventListener("click", (event) => {
    let target = event.target,
      targetClose = target.closest(".close-form"),
      targetContent = target.closest(".form-content");
    console.log("target: ", target);
    if (targetClose || targetContent == null) {
      form.style.display = "none";
    }
  });
};
export default toggleModal;
