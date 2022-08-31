// The Searchbar anim

const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");
  console.log("opened");
  setTimeout(() => {
    searchInput.focus();
    console.log("focesed");
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
  console.log("closed");
  console.log("unfocesed");
});

// The Searchbar anim

// The search bar

function searchData(text) {
  const results = popes.filter((item) => item.name.search(text) !== -1);
  const searchResults = document.querySelector("#search-results");
  searchResults.innerHTML = "";
  for (let i = 0; i < results.length; i++) {
    const link = document.createElement("a");
    link.href = "/" + popes[i].number + ".html";
    link.innerHTML = popes[i].name;
    searchResults.append(link);
  }
  if (text === "") {
    searchResults.innerHTML = "";
  }
}


// The search bar