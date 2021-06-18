const toTop = () => {
  const toTopButton = document.getElementById("totop");
  //console.log("toTopButton: ", toTopButton);

  toTopButton.onclick = () => {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };

  window.addEventListener("scroll", () => {
    toTopButton.hidden = pageYOffset < 725;
    //document.documentElement.clientHeight;
  });
};

export default toTop;
