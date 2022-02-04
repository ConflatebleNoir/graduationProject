// footer international phone

let input = document.querySelector('#phone');

intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "ru";
            success(countryCode);
        });
    },
});