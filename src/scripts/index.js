import "../css/style.css";
import "lazysizes";
import { wondersInformation } from "./model/places";
import { splicePlaces } from "./view/placesView";
import { spliceFooter } from "./view/footerView";
import { menuEvent } from "./module/menu";
import { searchClose, searchOpen } from "./module/search";
import { youtubeVideoClose, youtubeVideoOpen } from "./module/youtube";

searchOpen();
searchClose();
youtubeVideoClose();
youtubeVideoOpen();

const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {});

const imageController = () => {
  splicePlaces(wondersInformation);
  spliceFooter(wondersInformation);
};

imageController();
menuEvent();
