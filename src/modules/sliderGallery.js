const sliderGallery = () => {
  const //gallery = document.querySelector("#gallery"),
    slider = document.querySelector(".gallery-slider"),
    slide = slider.querySelectorAll(".slide"),
    dots = slider.querySelector(".slider-dots");
  //console.log("arrows: ", arrows);
  //console.log("dots: ", dots);
  let dot,
    arrowsSpan = document.createElement("span"),
    arrows = document.createElement("a");
  arrows.classList.add("slider-arrow");
  arrows.classList.add("prev");
  // arrows.appendChild(arrowsSpan);
  // slider.appendChild(arrows);
  // arrowsSpan = document.createElement("span");
  // arrows = document.createElement("a");
  // arrows.classList.add("slider-arrow");
  // arrows.classList.add("next");
  // arrows.appendChild(arrowsSpan);
  // slider.appendChild(arrows);
  const addDot = () => {
    console.log("dots: ", dots);
    for (let i = 1; i <= slide.length; i++) {
      let newDot = document.createElement("li"),
        newBtn = document.createElement("button");
      //console.log("newDot: ", newDot);
      newDot.appendChild(newBtn);
      //dots.appendChild(newDot);
      //console.log("newDot: ", newDot);
      newDot.classList.add("dot");
      if (i === 1) {
        newDot.classList.add("slick-active");
      }
      dots.appendChild(newDot);
      //console.log("dots: ", dots);
    }

    dot = slider.querySelectorAll(".dot");
    console.log("dot: ", dot);
  };
  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
    //console.log("elem[index]: ", elem[index].classList);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    //console.log("slide: ", slide);
    //console.log("dot: ", dot);
    //console.log("currentSlide: ", currentSlide);
    prevSlide(slide, currentSlide, "slide-active");
    prevSlide(dot, currentSlide, "slick-active");
    currentSlide++;
    currentSlide = currentSlide % slide.length;
    //console.log("currentSlide: ", currentSlide);
    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "slick-active");
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    console.log("event: ", event.target.matches("button"));
    event.preventDefault();
    let target = event.target;

    if (!target.matches("button")) {
      return;
    }
    prevSlide(slide, currentSlide, "slide-active");
    //console.log("currentSlide: ", currentSlide);

    prevSlide(dot, currentSlide, "slick-active");

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    } else if (target.closest("li")) {
      //console.log('target.closest("li"): ', target.closest("li"));
      dot.forEach((elem, index) => {
        if (elem === target.closest("li")) {
          currentSlide = index;
          console.log("currentSlide: ", currentSlide);
        }
      });
    }
    //console.log("currentSlide: ", currentSlide);

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "slick-active");
    //console.log("currentSlide: ", currentSlide);
  });
  slider.addEventListener("mouseover", (event) => {
    //console.log("event: ", event.target.matches(".dot"));
    if (
      //event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      stopSlide();
    }
  });

  slider.addEventListener("mouseout", (event) => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      startSlide();
    }
  });
  addDot();
  startSlide(1500);
  //console.log("slider starts");
};

export default sliderGallery;
