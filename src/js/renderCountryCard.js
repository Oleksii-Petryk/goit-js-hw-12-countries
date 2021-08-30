import { countryProfile } from '../templates/countryProfile';
import { Refs } from './Refs';


export function renderCountryCard(arrCountry) {
    const countryCard = countryProfile(arrCountry);
    Refs.container.insertAdjacentHTML = ('beforeend', countryCard);
};