let input = document.querySelector('#phone');
let iti = window.intlTelInput(input, {
    initialCountry: "auto",
    geoLookup: function (success, failure) {
        axios({
            method: 'get',
            url: 'https://ipinfo.io',
            responseType: 'json'
        }).then(function (response) {
            success(response.data.country);
        })
    },
    utilsScript: 'js/utils.js'
});