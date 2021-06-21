const selectClub = () => {
  const clubList = document.querySelector(".clubs-list"),
    clubSelect = clubList.querySelector("p"),
    clubItems = clubList.querySelector("ul");

  clubSelect.addEventListener("click", (event) => {
    clubItems.style.display = "block";
  });

  document.addEventListener("click", (event) => {
    let target = event.target;
    //console.log("target: ", target.closest(".clubs-list"));

    if (target.closest(".clubs-list") == null) {
      event.preventDefault();
      clubItems.style.display = "none";
      return;
    }
  });
};

export default selectClub;
