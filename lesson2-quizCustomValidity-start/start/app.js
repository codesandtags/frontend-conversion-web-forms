/*
 Your code goes here!
 */

/*
 You might find you want to use RegEx. As this quiz is about setCustomValidity
 and not RegEx, here are some RegEx patterns you might find useful:

 match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
 match a number: /[0-9]/g or /\d/g
 match a lowercase letter: /[a-z]/g
 match an uppercase letter: /[A-Z]/g
 match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
 Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first'),
    secondPasswordInput = document.querySelector('#second'),
    feedBackValidations = [],
    submit = document.querySelector('#submit');

var CONSTANTS = {
    "LESS_THAN_16_CHARS": "16 characters",
    "GREATER_THAN_100_CHARS": "100 characters",
    "NOT_MATCH_PASSWORDS": "match",
    "MINIMUM_A_SYMBOL": "symbol",
    "MINIMUM_A_NUMBER": "number",
    "MINIMUM_A_LOWERCASE": "lowercase",
    "MINIMUM_A_UPPERCASE": "uppercase",
    "ILLEGAL_CHARACTER": "illegal"
};

/*
 You'll probably find this function useful...
 */
submit.onclick = function () {
    validateFields();
};

function validateFields() {
    // Array for feedback messages
    feedBackValidations = [];

    // Validations
    validateLength();
    validateMatch();
    validateSymbol();
    validateNumber();
    validateLowerCase();
    validateUpperCase();
    validateIllegalChar();

    // Adding custom validations
    showValidations(firstPasswordInput);
    showValidations(secondPasswordInput);
}

function validateLength() {
    if (firstPasswordInput.value.length < 16) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.LESS_THAN_16_CHARS));
    }
    if (firstPasswordInput.value.length > 100) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.GREATER_THAN_100_CHARS));
    }
    if (secondPasswordInput.value.length < 16) {
        feedBackValidations.push(buildFeedback(secondPasswordInput, CONSTANTS.LESS_THAN_16_CHARS));
    }
    if (secondPasswordInput.value.length > 100) {
        feedBackValidations.push(buildFeedback(secondPasswordInput, CONSTANTS.GREATER_THAN_100_CHARS));
    }
}

function validateMatch() {
    if (firstPasswordInput.value !== secondPasswordInput.value) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.NOT_MATCH_PASSWORDS));
    }
}

function validateSymbol() {
    if (!firstPasswordInput.value.match(/[!@#$%^&*]/g)) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.MINIMUM_A_SYMBOL));
    }
}

function validateNumber() {
    if (!firstPasswordInput.value.match(/\d/g)) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.MINIMUM_A_NUMBER));
    }
}

function validateLowerCase() {
    if (!firstPasswordInput.value.match(/[a-z]/g)) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.MINIMUM_A_LOWERCASE));
    }
}

function validateUpperCase() {
    if (!firstPasswordInput.value.match(/[A-Z]/g)) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.MINIMUM_A_UPPERCASE));
    }
}

function validateIllegalChar() {
    if (firstPasswordInput.value.match(/[^a-zA-Z0-9!@#$%^&*]/g)) {
        feedBackValidations.push(buildFeedback(firstPasswordInput, CONSTANTS.ILLEGAL_CHARACTER));
    }
}

function buildFeedback(field, message) {
    return {
        "field": field,
        "message": message
    }
}

function showValidations(field) {
    var messages = [];
    feedBackValidations.forEach(function (feedback) {
        if(feedback.field === field){
            messages.push(feedback.message);
        }
    });
    field.setCustomValidity(messages.join("\n + "));
}