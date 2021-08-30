export default function fetchCountries(queryCountryName) {
    const BASIS_URL = 'https://restcountries.eu/rest/v2/name/';
    return fetch(`${BASIS_URL}${queryCountryName}`)
        .then(response => {
            if (!response.ok) {
                return inputNoticeError();
            };
            return response.json();
        });
};
