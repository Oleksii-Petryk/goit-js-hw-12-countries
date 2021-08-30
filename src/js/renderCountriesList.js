import { refs } from './refs.js';
import listItem from '../templates/listItem.hbs';


export function renderCountriesList(arrCountry) {
    const countriesList = listItem(arrCountry);
    refs.container.insertAdjacentHTML('beforeend', countriesList);
};