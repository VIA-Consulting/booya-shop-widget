const input = document.querySelector("#mobile_code");
export const inputInstance = intlTelInput(input, {
    initialCountry: "pt",
    nationalMode: true,
    separateDialCode: true,
    utilsScript: "../src/inputTel/build/js/utils.js",
    separateDialCode: true
});
