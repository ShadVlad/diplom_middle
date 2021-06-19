const selectClub = () => {
  const clubList = document.querySelector(".clubs-list");
  const clubSelect = clubList.querySelector("p");
  const clubItems = clubList.querySelector("ul");

  clubSelect.addEventListener("click", (event) => {
    clubItems.style.display = "block";
  });
};

export default selectClub;
