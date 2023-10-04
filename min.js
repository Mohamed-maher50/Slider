let obj = {
  index: 0,
};

// Dom elements
// buttons
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

// images
const sliderImage = document.getElementsByClassName("slider_img");
const lengthOfImages = sliderImage.length;

// Functions
const render = () => {
  for (const key of sliderImage) key.classList.remove("active");
  sliderImage[globalSliderVariables.index].classList.add("active");
};
const nextHandler = () => {
  console.log(globalSliderVariables.index);
  globalSliderVariables.index < lengthOfImages - 1
    ? ++globalSliderVariables.index
    : (globalSliderVariables.index = 0);
};
const prevHandler = () => {
  console.log(globalSliderVariables.index);
  globalSliderVariables.index > 0
    ? --globalSliderVariables.index
    : (globalSliderVariables.index = lengthOfImages - 1);
};

// implementation
prevButton.addEventListener("click", prevHandler);
nextButton.addEventListener("click", nextHandler);

// render
const globalSliderVariables = new Proxy(obj, {
  set: function (prev, _, newValue) {
    prev.index = newValue;
    console.log(obj.index);
    render();
  },
});
