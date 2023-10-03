// dom elements
let index = 0;
const sliderImage = document.getElementsByClassName("slider_img");
const lengthOfImages = sliderImage.length;
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

// functions
const nextHandler = () => {
  index < lengthOfImages ? ++index : 0;
};
const prevHandler = () => {
  index > 0 ? --index : (index = lengthOfImages - 1);
};

// implementation
prevButton.addEventListener("click", prevHandler);
nextButton.addEventListener("click", nextHandler);
