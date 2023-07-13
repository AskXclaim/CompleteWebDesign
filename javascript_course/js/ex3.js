"use strict";

//Exercise 1
const convertButton = document.getElementById("convert");
const getFahrenheit = (celsiusValue) => {
    if (celsiusValue && parseFloat(celsiusValue)) {
        const tempCelsiusInputValue = parseFloat(celsiusValue.trim());
        return (tempCelsiusInputValue * (9 / 5)) + 32;
    }

    throw new Error("An error occurred. Please check the parameter passed");
}

convertButton.onclick = () => {
    const tempCelsiusInput = document.getElementById("temp_celsius").value;
    const result = getFahrenheit(tempCelsiusInput);
    document.getElementById("temp_fahr").innerHTML = result.toString();
};

//Exercise 2
const getWorldCupYears = (startYear = 2022, endYear = 2050) => {
    const worldCupYears = [];
    if (startYear && endYear && Number.isInteger(startYear) && Number.isInteger(endYear)) {
        for (let i = startYear; i <= endYear; i++) {
            if (i % 4 === 0) worldCupYears.push(i);
        }
        return worldCupYears;
    }

    throw new Error("An error occurred please check that the parameters passed are all valid.");
}

const addItems = (ulElement, itemArray) => {
    console.log(itemArray);
    if (itemArray && ulElement && Array.isArray(itemArray) && ulElement.tagName === "UL") {
        for (let i = 0; i < itemArray.length; i++) {
            // ulElement.innerHTML += `<li>${itemArray[i]}<\li>`
            const list = document.createElement('li');
            list.innerText=itemArray[i];
            ulElement.appendChild(list);
        }
    }
};

const htmlElement = document.getElementById("anos_copa");
htmlElement.innerHTML = "";

addItems(htmlElement, getWorldCupYears());

