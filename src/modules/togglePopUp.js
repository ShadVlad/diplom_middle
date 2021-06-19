const togglePopUp = () => {
  const popUpMenu = document.querySelector(".popup-menu"),
    menuBtn = document.querySelector(".menu-button");
  console.log("popUpMenu: ", popUpMenu);
  menuBtn.addEventListener("click", (event) => {
    popUpMenu.style.display = "flex";
  });

  popUpMenu.addEventListener("click", (event) => {
    let target = event.target,
      targetClose = target.closest(".close-menu-btn"),
      targetRef = target.closest(".scroll");

    if (targetClose || targetRef) {
      popUpMenu.style.display = "none";
    }
  });
};

export default togglePopUp;
