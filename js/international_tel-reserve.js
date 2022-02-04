// reserve pop-up international phone

let inputReserve = document.querySelector('#reserve-phone');

let itiReserve = window.intlTelInput(inputReserve, {
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
    utilsScript: 'js/utils.js'
});