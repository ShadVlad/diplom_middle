"use strict";

import calc from "./modules/calc";
import fixMenu from "./modules/fixMenu";
import mainSlider from "./modules/mainSlider";
import promo from "./modules/promo";
import sendForm from "./modules/sendForm";
import sliderCarousel from "./modules/sliderCarousel";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import sliderGallery from "./modules/sliderGallery";

fixMenu();
//
toggleMenu();
//
togglePopUp();
//
sendForm();
//slider
sliderGallery();
// command
promo();
//calculator
calc();
//connect
sliderCarousel();

mainSlider();
