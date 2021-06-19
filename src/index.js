"use strict";

import calc from "./modules/calc";
import fixMenu from "./modules/fixMenu";
import mainSlider from "./modules/mainSlider";
import promo from "./modules/promo";
import sendForm from "./modules/sendForm";
import sliderCarousel from "./modules/sliderCarousel";
import toggleMenu from "./modules/toggleMenu";
import selectClub from "./modules/selectClub";
import sliderGallery from "./modules/sliderGallery";
import toTop from "./modules/toTop";
import toggleGift from "./modules/toggleGift";
import togglePopUp from "./modules/togglePopUp";
import freeVisitUp from "./modules/freeVisitUp";
import callBackUp from "./modules/callBackUp";

fixMenu();
//
toggleMenu();
//
selectClub();
//
sendForm();
//slider
sliderGallery();
// command
promo();
//calculator
calc();

callBackUp();

toTop();

togglePopUp();

toggleGift();

freeVisitUp();

mainSlider();
