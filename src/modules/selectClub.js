const selectClub = () => {
  const clubList = document.querySelector(".clubs-list"),
    clubSelect = clubList.querySelector("p"),
    clubItems = clubList.querySelector("ul");

  clubSelect.addEventListener("click", (event) => {
    clubItems.style.display = "block";
  });
};

export default selectClub;
