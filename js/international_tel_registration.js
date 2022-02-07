// registration pop-up international phone

let inputRegistration = document.querySelector('#registration-phone');

let itiRegistration = window.intlTelInput(inputRegistration, {
    initialCountry: "auto",
    geoLookup: function (success, failure) {
        axios({
            method: 'post',
            url: 'https://ipinfo.io',
            responseType: 'json'
        }).then(function (response) {
            success(response.data.country);
        })
    },
    utilsScript: 'utils.js'
});