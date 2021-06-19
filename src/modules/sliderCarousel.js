// const sliderCarousel = () => {};

// export default sliderCarousel;

"use strict";

class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = 0,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.log("Необходимы 2 свойства, 'main' и 'wrap'");
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    //console.log("~ this.slides", this.slides);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
    console.log("responsive: ", responsive);
  }

  init() {
    this.addServeClass();
    //this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }
    //console.log("this: ", this);
  }

  addServeClass() {
    this.main.classList.add("serve-slider");
    this.wrap.classList.add("serve-slider__wrap");
    for (const item of this.slides) {
      item.classList.add("serve-slider__item");
    }
  }
  addStyle() {
    let style = document.getElementById("sliderCarousel-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "sliderCarousel-style";
    }
    style.textContent = `
    .serve-slider {
      overflow: hidden !important;
      
      padding-left: 10px;
      padding-right: 10px;
      
    }
    .serve-slider__wrap{  
      display: flex !important;
      transition: transform 0.5s !important;
      will-chabge: transform !important;
    }

    .serve-slider__item{
      text-align: center;
      margin-right: 6px;
      margin-left: 6px;
      display: block !important;
      width: 210px;
      align-items: center;
      justify-content: center;
      flex: 0 0 ${this.options.widthSlide}% !important;
      margin: 0 !important;
      
    }
    `;

    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.options.maxPosition
    ) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  addArrow() {
    this.prev = document.createElement("span");
    this.next = document.createElement("span");

    this.prev.className = "serve-slider__prev";
    this.next.className = "serve-slider__next";
    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement("style");
    style.textContent = `
    .serve-slider__prev,   
    .serve-slider__next {
      
      display: flex;
      width: 36px;
      height: 37px;
      background-color: #f4c71b;
      border-radius: 50%;
      text-align: center;
      padding-top: 11px
    }
    .serve-slider__next {
      border-left-color: #19b5ff;
    }

    .serve-slider__prev {
      border-right-color: #19b5ff;
    }

    .serve-slider__prev:hover,   
    .serve-slider__next:hover,
    .serve-slider__prev:focus,   
    .serve-slider__next:focus {
      background: #19b5ff;
      outline: transparent;
    }
    `;
    document.head.appendChild(style);
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;

    const allResponse = this.responsive.map((item) => item.breakpoint);
    //console.log("allResponse: ", allResponse);
    const maxResponse = Math.max(...allResponse);
    const chekResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      //console.log("widthWindow: ", widthWindow);
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            //console.log("allResponse[i]: ", allResponse[i]);
            this.slidesToShow = this.responsive[i].slidesToShow;
            //console.log("this.slidesToShow: ", this.slidesToShow);
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            //console.log("this.options.widthSlide: ", this.options.widthSlide);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
      console.log("slidesToShow: ", slidesToShowDefault);
    };
    chekResponse();

    window.addEventListener("resize", () => {
      //console.log(document.documentElement.clientWidth);
      chekResponse();
    });
  }
}
