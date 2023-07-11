"use strict";

const getError = () => new Error("An error occurred, please check the value(s) passed into the function.");
const convertCelsiusFahrenheit = (celsius) => {
    if (celsius && typeof celsius === "number")
        return (9 * celsius / 5) + 32;

    throw getError();
};

const getValue = (elementId) => {
    if (elementId && typeof elementId === "string") {
        return document.getElementById(elementId).innerText;
    }

    throw  getError();
};

const setResult = (elementId, value) => {
    if (elementId && typeof elementId === "string") {
        document.getElementById(elementId).innerHTML = value;
        return
    }

    throw getError();
};

let elementValue = parseFloat(getValue("celsius_1"));
setResult("fahr_1", convertCelsiusFahrenheit(elementValue));

elementValue = parseFloat(getValue("celsius_2"));
setResult("fahr_2", convertCelsiusFahrenheit(elementValue));

elementValue = parseFloat(getValue("celsius_3"));
setResult("fahr_3", convertCelsiusFahrenheit(elementValue));

//Exercise 2
const classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
const topThreeStudents = classification.slice(-3);

const element = document.getElementById("best_students");
element.innerHTML = "";

for (let i = 0; i < topThreeStudents.length; i++) {
    if (i === topThreeStudents.length - 1)
        element.innerHTML += topThreeStudents[i] + " ";
    else
        element.innerHTML += topThreeStudents[i] + ", ";
}
;

//Exercise 3

const getFiveStarReviewPercentage = (data) => {
    let totalReviewValue = 0;
    let fiveStarValue = '';
    for (let i = 1; i <= 5; i++) {
        if (i === 5) {
            fiveStarValue = data[`${i}_stars_reviews`];
        }
        totalReviewValue += data[`${i}_stars_reviews`];
    }
    if (typeof fiveStarValue === "number")
        return ((fiveStarValue / totalReviewValue) * 100).toFixed(2);

    throw getError();
}

const course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};

setResult("course_title", course.title);
setResult("main_category", course.categories[0]);
setResult("reviews_5_stars", `${getFiveStarReviewPercentage(course)}%`);
    
//Exercise 4
const shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

shoppingList.unshift(shoppingList.pop());
shoppingList.push("Cheese");
shoppingList.push("Eggs");

console.log(shoppingList);