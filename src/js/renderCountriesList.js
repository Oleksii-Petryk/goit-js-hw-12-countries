import { Refs } from "./Refs";
import { listItem } from '../templates/listItem';


export function renderCountriesList(arrCountry) {
    const countriesList = listItem(arrCountry);
    Refs.list.insertAdjacentHTML = ('afterbegin', countriesList);
};