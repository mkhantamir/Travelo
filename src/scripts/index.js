import "../css/style.css";
import { wondersInformation } from "./model/places";
import { splicePlaces } from "./view/placesView";
import { spliceFooter } from "./view/footerView";

const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {});

const imageController = () => {
  splicePlaces(wondersInformation);
  spliceFooter(wondersInformation);
};
imageController();
