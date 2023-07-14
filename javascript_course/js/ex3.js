"use strict";

//Exercise 1
const convertButton = document.getElementById("convert");
const getFahrenheit = (celsiusValue) => {
    if (!isNaN(parseFloat(celsiusValue))) {
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
    if (startYear && endYear && Number.isInteger(startYear)
        && Number.isInteger(endYear) && startYear > 0 && endYear > 0) {
        for (let i = startYear; i <= endYear; i++) {
            if (i % 4 === 0) worldCupYears.push(i);
        }
        return worldCupYears;
    }

    throw new Error("An error occurred please check that the parameters passed are all valid.");
}

const addItems = (ulElement, itemArray) => {
    if (itemArray && ulElement && Array.isArray(itemArray) && ulElement.tagName === "UL") {
        for (let i = 0; i < itemArray.length; i++) {
            // ulElement.innerHTML += `<li>${itemArray[i]}<\li>`
            const list = document.createElement('li');
            list.innerText = itemArray[i];
            ulElement.appendChild(list);
        }
    }
};

const htmlElement = document.getElementById("anos_copa");
htmlElement.innerHTML = "";

addItems(htmlElement, getWorldCupYears());

//Exercise 3
const getHtmlElementValue = (htmlElementId) => {
    if (htmlElementId)
        return document.getElementById(`${htmlElementId}`).value;

    throw new Error("An error occurred. Please, check the html element id passed");
};

const getGradeValue = (value) => {
    value = parseFloat(value);
    if (!isNaN(value)) {
        if (value < 0) throw new Error("The supplied value cannot be less than zero.");

        return value;
    }
    throw new Error("Please provide a valid numeric value");
};

const getAbsences = (value) => {
    value = parseInt(value);
    if (!isNaN(value) && Number.isInteger(value)) {
        if (value < 0 || value > 20) {
            throw new Error("Value cannot be less than zero or greater than 20")
        }
        return value;
    }
    throw new Error("Value has to be a valid integer");
};

const getGradesAverage = (grade1, grade2) => {
    if (typeof grade1 === "number" && typeof grade2 === "number")
        return (grade1 + grade2) / 2;

    throw new Error("An error occurred. Please check the grades passed in");
}

const getAbsencesPercentage = (value) => {
    if (Number.isInteger(value)) return (value / 20) * 100;

    throw new Error("An error occurred. Please check the value supplied");
};

const assignResult = (grade1Value, grade2Value, absencesValue) => {
    let result = "";
    if (getGradesAverage(grade1Value, grade2Value) < 6.5)
        result += "Average of grades is less than 6.5";

    if (getAbsencesPercentage(absencesValue) < 70)
        result += result.length > 0 ? " and absences is less than 70%." : "Absences is less than 70%.";

    if (result.length === 0) result = "Student passed";

    document.getElementById("result").innerHTML = `${result}`;
}

const calculateButton = document.getElementById("calculate");
calculateButton.onclick = () => {
    const grade1Value = getGradeValue(getHtmlElementValue("grade1"));
    const grade2Value = getGradeValue(getHtmlElementValue("grade2"));
    const absencesValue = getAbsences(parseInt(getHtmlElementValue("absences")));

    assignResult(grade1Value, grade2Value, absencesValue);
}

//Exercise 4
const sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null

    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'

    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null

    }
];

const tableBodyCourseSales = document.getElementById("course_sales");
tableBodyCourseSales.rows[0].remove();
const tableTDTotalSold = document.getElementById("total_sold");
let tableRowNumber = 0;
let totalAmount = 0;
for (let i = 0; i < sales.length; i++) {
    if (sales[i].refundRequested === null) {
        const data = sales[i];
        let newRow = tableBodyCourseSales.insertRow(-1);
        newRow.insertCell(0).innerText = `${data.student}`;
        newRow.cells[0].style.textAlign = "center";
        newRow.insertCell(1).innerText = `${data.date}`;
        newRow.insertCell(2).innerText = `${data.amount}`;

        totalAmount += data.amount;
    }
}
tableTDTotalSold.innerHTML = totalAmount.toFixed(2).toString();