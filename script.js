const tabs = document.querySelectorAll(".tabs li");
const categories = document.querySelectorAll(".category li");
const btnLike = document.querySelectorAll(".btn-like");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveFromPrevTab();
    tab.classList.add("active");
  });
});

const removeActiveFromPrevTab = () => {
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });
};

categories.forEach((category) => {
  category.addEventListener("click", () => {
    removeAciveFromPrevCategory();
    category.classList.add("active");
  });
});

const removeAciveFromPrevCategory = () => {
  categories.forEach((category) => {
    if (category.classList.contains("active")) {
      category.classList.remove("active");
    }
  });
};

btnLike.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});
