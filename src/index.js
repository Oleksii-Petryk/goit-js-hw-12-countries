import debounce from 'lodash.debounce';
import { refs }  from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import { htmlCleaner, profileRemover } from './js/resetAll.js';
import { errorNotice } from './js/errorNotice.js';
import { inputNoticeError } from './js/inputNoticeError.js';
import { renderCountriesList }  from './js/renderCountriesList.js';
import { renderCountryCard } from './js/renderCountryCard.js';


refs.input.addEventListener('input', debounce(onInputChange, 500));


function onInputChange() {
    
    fetchCountries(refs.input.value)
        .then(arrCountry => {
            if (arrCountry.length > 10) {
                htmlCleaner();
                errorNotice();
            } else if (arrCountry.length >= 2 && arrCountry.length <= 10) {
                htmlCleaner();
                renderCountriesList(arrCountry);
                
            } else {
                htmlCleaner();
                renderCountryCard(arrCountry);
                   
            }
        })
        .catch(() => {
            htmlCleaner();
            inputNoticeError();
        });
};
