console.log("main.js connected");

const searchItemsInput = document.body.querySelector("#search-items");
const categoryFilter = document.body.querySelector("#category-filter");

const getClothCategories = async () => {
  const ClothCategoriesDbJson = "http://localhost:3000/clothes";
  const response = await fetch(ClothCategoriesDbJson);
  const clothes = await response.json();
  console.log(`clothes`, clothes);
  console.table(clothes);

  const clothCategoryList = document.body.querySelector(
    "#cloth-categories-list"
  );

  clothes.forEach(() => {
    const clothCategoryListItem = document.createElement("li");
    clothCategoryListItem.className = "cloth-category-card";
    clothCategoryList.appendChild(clothCategoryListItem);

    const clothCategoryImage = document.createElement("img");
    clothCategoryImage.src = getClothCategories.picture;
    clothCategoryImage.width = 300;
    clothCategoryListItem.appendChild(clothCategoryImage);

    const clothCategoryName = document.createElement("h4");
    clothCategoryName.textContent = clothes?.name;

    clothCategoryListItem.appendChild(clothCategoryName);

    const clothCategoryDescription = document.createElement("p");
    clothCategoryDescription.textContent = clothes?.Description;
    clothCategoryListItem.appendChild(clothCategoryDescription);
  });
};

const handleFormInputFocus = async () => {
  console.log(`focus occurred`);
  console.log(getClothCategories);
  getClothCategories();
};

searchItemsInput.addEventListener("focus", handleFormInputFocus());
searchItemsInput.addEventListener("click", handleFormInputFocus());
categoryFilter.addEventListener("click", handleFormInputFocus());


