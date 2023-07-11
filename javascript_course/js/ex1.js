"use strict";

//Exercise 2
const personalDetails = {
    "firstName": "Kola",
    "lastName": "Abolarinwa",
    "yearOfBirth": 1986
};

const getDateOfBirth = (yearOfBirth) => {
    if (yearOfBirth && typeof yearOfBirth === "number") {
        const today = new Date();
        return today.getFullYear() - yearOfBirth
    }

    throw new Error("An invalid parameter appears to have been passed");
};

let text = `Hi, my name is ${personalDetails.firstName} ${personalDetails.lastName},`
text += `I'm ${getDateOfBirth(personalDetails.yearOfBirth)}`

document.getElementById("student_message").innerHTML = text;

//Exercise 3

const num1 = document.getElementById("num_1").innerHTML;
const num2 = document.getElementById("num_2").innerHTML;

if (num1 && num2 && parseFloat(num1) && parseFloat(num2)) {
    const result = ((parseFloat(num1) + parseFloat(num2)) / 2)
        .toFixed(2).toString();
    document.getElementById("result").innerHTML = result;
}

//Exercise 4
const phone1 = "988866552";
const phone2 = "99087612366";
const phone3 = 876543123;

const phoneNumbers = [phone1, phone2, phone3, "-876543123", -876543123];

const isNineDigitPhoneNumber = (value) => {
    if (value && !isNaN(parseInt(value))) {
        const regExp = /\D/;
        if (typeof value === "string" && regExp.test(value))
            return false;
        else
            value = parseInt(value);

        return Math.abs(value).toString().length === 9
    }

    return false;
};

for (let i = 0; i < phoneNumbers.length; i++) {
    console.log(isNineDigitPhoneNumber(phoneNumbers[i]));
}

//Exercise 5
console.log(Math.pow(32, 6));

//Exercise 6
// a) var NAME; ==> valid
//
// b) var $num1; ==> valid
//
// c) var typeof; ==> not valid, it's a key word
//
// d) var first-name; ==> invalid becos variable name can't have dash
//
// e) var attempt_2; ==> valid
//
// f) var 2ndAttempt; ==> invalid as it starts with a number
//
// g) var full name; ==> invalid as it contains space

//Exercise 7
let quantity = "25";
let number = 6;
let pressure;
let temperature = null;

console.log(quantity += quantity); //"2525"
console.log((7 + 5) / number + 2); //4
console.log(pressure); //undefined
console.log(temperature); //null
console.log(typeof pressure); //object
console.log(typeof temperature); //undefined

//Exercise 8

const getUrlValue = (elementId) => {
    if (elementId && typeof elementId === "string") {
        return document.getElementById(elementId).innerText;
    }

    throw new Error("It appears an invalid elementId was passed");
};

const getFullUrl = (value) => {
    if (value && typeof value === "string") {
        if (value.includes("https://"))
            value = value.replaceAll("https://", "");

        return `https://${value}`;
    }

    throw new Error("An error has occurred please check and confirm a valid value was passed in");
};

const setInnerHtml = (elementId, value) => {
    if (elementId && typeof elementId === "string") {
        return document.getElementById(elementId).innerHTML = value;
    }

    throw new Error("It appears an invalid elementId was passed");
}

let urlValue = getUrlValue("url_1");
console.log(getFullUrl(urlValue));
setInnerHtml("url_2", getFullUrl(urlValue));

urlValue = getUrlValue("url_3");
console.log(getFullUrl(urlValue));
setInnerHtml("url_4", getFullUrl(urlValue));
