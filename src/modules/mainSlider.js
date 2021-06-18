const mainSlider = () => {
  const //gallery = document.querySelector("#gallery"),
    slider = document.querySelector(".main-slider"),
    slide = slider.querySelectorAll(".slide");

  let currentSlide = 0,
    interval;
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    //console.log("elem[index]: ", elem[index].classList);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
    //console.log("elem[index]: ", elem[index].classList);
  };
  const autoPlaySlide = () => {
    //console.log("slide: ", slide);
    //console.log("dot: ", dot);
    //console.log("currentSlide: ", currentSlide);
    prevSlide(slide, currentSlide, "slide-active");

    currentSlide++;
    currentSlide = currentSlide % slide.length;
    //console.log("currentSlide: ", currentSlide);
    nextSlide(slide, currentSlide, "slide-active");
  };

  const startSlide = (time = 5000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };
  startSlide(1000);
};

export default mainSlider;
