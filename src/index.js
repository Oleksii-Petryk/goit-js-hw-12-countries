import debounce from 'lodash.debounce';
import { Refs } from './js/Refs';
import fetchCountries from './js/fetchCountries';
import { htmlCleaner, inputCleaner } from './js/resetAll';
import { errorNotice } from './js/errorNotice';
import { inputNoticeError } from './js/inputNoticeError';
import { renderCountriesList } from './js/renderCountriesList';
import {renderCountryCard} from './js/renderCountryCard';


Refs.input.addEventListener('input', debounce(onInputChange, 2000));


function onInputChange (e) {
    let queryCountryName = e.target.value;
    fetchCountries(queryCountryName)
        .then(arrCountry => {
            if (arrCountry.length > 10) {
                htmlCleaner();
                errorNotice();
            } else if (arrCountry.length >= 2 && arrCountry.length <= 10) {
                // console.log(arrCountry);
                // renderCountriesList(arrCountry);
                
            } else {
                renderCountryCard(arrCountry);
                // inputCleaner();
                console.log(arrCountry);
                
            }
        })
        .catch(() => {
            htmlCleaner();
            inputNoticeError();
            
        });
};
