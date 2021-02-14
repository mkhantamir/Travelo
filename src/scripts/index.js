import "../css/style.css";
import { wondersInformation } from "./model/places";
import { splicePlaces } from "./view/placesView";

const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {});

const wonderController = () => {
  splicePlaces(wondersInformation);
};
wonderController();
