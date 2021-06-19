const fixMenu = () => {
  const menuBtn = document.querySelector(".top-menu");

  //const menuBtnMenu = menuBtn[1];
  //console.log("menuBtnMenu: ", menuBtn);

  window.addEventListener("scroll", () => {
    //console.log("scrolling: ");
    if (pageYOffset > 187 && menuBtn.clientWidth < 768) {
      menuBtn.style.position = "fixed";
      menuBtn.style.top = "0";
    } else {
      menuBtn.style.position = "";
      menuBtn.style.top = "";
    }
  });
};

export default fixMenu;
