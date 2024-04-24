let phoneRegex = /^\+?(\d{1,3})?[-. ]?(\()?(\d{1,3})(\))?[-. ]?(\d{1,4})[-. ]?(\d{1,4})$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
    'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
    'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];
let form=null;
let successMsg=null;
function initValidation(formId, successId, formBtnId) {

    form = document.getElementById(formId);
    successMsg = document.getElementById(successId);
    formBtn = document.getElementById(formBtnId);

    let inputs = document.querySelectorAll("input");
    let input;
    for (input of inputs) {
        input.addEventListener("change", inputChanged );
    }
    form.addEventListener("submit", submitForm );

}
function inputChanged(elementValidity) {
    let element = elementValidity.currentTarget;
    validateForm(element);
}

function submitForm(elementValidity) {
    elementValidity.preventDefault();
    validateForm();
    let form = elementValidity.currentTarget;

    if (form.checkValidity()) {
        form.style.display = "none";
        formBtn.style.display = "none";
        successMsg.style.display = "block";
    }
}


function validateForm() {

    checkRequired("first-name", "First Name is Required");
    checkRequired("last-name", "Last Name is Required");
    checkRequired("address", "Address is Required");
    checkRequired("city", "City is Required");

    if(checkRequired("state", "State is Required")){
        validateState("state", "Not a valid State, enter two digit code e.g., UT");
    }

    if (checkRequired("email", "Email Address is required")) {
        checkFormat("email", "email format is bad", emailRegex)
    }
    if (checkRequired("zip", "Zip Code is Required")) {
        checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex)
    }
    if (checkRequired("phone", "Phone is required")) {
        checkFormat("phone", "phone format is bad", phoneRegex)
    }
    checkRequired("newspaper", "you must select at least one!");

    Array.from(form.elements).forEach(input => {
        input.classList.add('was-validated');
    });
}

function validateState(id, msg) {
    let element = document.getElementById(id);
    let inputValue = element.value.toUpperCase();
    let validState = stateAbbreviations.includes(inputValue);
    setElementValidity(id, validState, validState ? '' : msg);
}

function checkFormat(id, msg, regex) {
    let element = document.getElementById(id);
    let inputValue = element.value;
    let validFormat = regex.test(inputValue);
    setElementValidity(id, validFormat, validFormat ? '' : msg);
    return validFormat;
}


function checkRequired(id, message) {
    let element = document.getElementById(id);
    let toggleInput = element.value.trim() !== '';
    if (element.type === 'checkbox' || element.type === 'radio') {
        let name = element.name;
        let checked = document.querySelector(`input[name="${name}"]:checked`);
        toggleInput = checked !== null;
    }
    setElementValidity(id, toggleInput, toggleInput ? '' : message);
    return toggleInput;
}


function setElementValidity(id, valid, message) {
    let element = document.getElementById(id);
    let errorMessage = element.nextElementSibling;
    let successMessage = element.nextElementSibling.nextElementSibling;

    if (valid) {
        element.setCustomValidity('');
        if (errorMessage && errorMessage.classList.contains('error-msg')) {
            errorMessage.innerHTML = '';
        }
        if (successMessage && successMessage.classList.contains('success-msg')) {
            successMessage.innerHTML = '&#10004;';
        }
    } else {
        element.setCustomValidity(message);
        if (errorMessage && errorMessage.classList.contains('error-msg')) {
            errorMessage.innerHTML = message;
        }
        if (successMessage && successMessage.classList.contains('success-msg')) {
            successMessage.innerHTML = '';
        }
    }

    element.reportValidity();
}
