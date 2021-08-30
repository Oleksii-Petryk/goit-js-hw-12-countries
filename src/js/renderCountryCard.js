import countryProfile from "../templates/countryProfile.hbs";
import { refs } from "./refs.js";


export function renderCountryCard(arrCountry) {
    const countryCard = countryProfile(arrCountry);
    refs.container.insertAdjacentHTML('beforeend', countryCard);
};