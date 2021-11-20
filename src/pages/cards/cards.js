import "../../components/room-search/roomSearch";
import "../../components/registration-form/registrationForm";
import "../../components/booking-form/bookingForm";
import "../../components/image-slider/imageSlider";
import { DateDropdown } from "../../components/date-dropdown/dateDropdown";
import "./cards.scss";

const dateDropdowns = document.querySelectorAll(".js-date-dropdown");
const arrayOfDateDropdowns = [...dateDropdowns]
  .filter((dropdown) => !dropdown.closest(".js-booking-form"))
  .filter((dropdown) => !dropdown.closest(".js-room-search"));
arrayOfDateDropdowns.forEach((dateDropdown) => new DateDropdown(dateDropdown));
