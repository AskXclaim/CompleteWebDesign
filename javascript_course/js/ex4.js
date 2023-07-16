"use strict";
//Exercise 1
const shipments =
    {
        'standard': {
            'leadTime': 7,
            'fee': 2
        },
        'express': {
            'leadTime': 3,
            'fee': 4.5
        }
    };

const getSelectedField = (event) => {
    const options = event.target.options;
    const selectedOptionIndex = options.selectedIndex;
    return options[selectedOptionIndex];
}

const getISODate = (now) =>
    `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${(now.getDate()).toString().padStart(2, "0")}`;

const setNecessaryDiv = (selectedField) => {
    const data = shipments[selectedField.value];
    const now = new Date();
    document.getElementById("order_date").innerHTML = getISODate(now);
    (now.setDate(now.getDate() + data.leadTime));
    document.getElementById("delivery_date").innerHTML = getISODate(now);
    document.getElementById("delivery_fee").innerHTML = `$${data.fee.toFixed(2).toString()}`;
}

const clearDiv = () => {
    document.getElementById("order_date").innerHTML = "";
    document.getElementById("delivery_date").innerHTML = "";
    document.getElementById("delivery_fee").innerHTML = "";
}

const shipmentOnchange = (event) => {
    const selectedField = getSelectedField(event);
    if (selectedField.value) setNecessaryDiv(selectedField);
    else clearDiv();
};

const shipmentsSelectionInput = document.getElementById("shipments");
shipmentsSelectionInput.onchange = shipmentOnchange;

//Exercise 2
const phones =
    {
        'iphone_se_red': {
            'name': 'iPhone SE 64GB Red',
            'price': '450',
            'currency': 'US$',
            'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
        },
        'iphone_11_black': {
            'name': 'iPhone 11 128GB Black',
            'price': '869',
            'currency': 'EUR€',
            'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
        },
        'iphone_8_plus_silver': {
            'name': 'iPhone 8 Plus 64GB Silver',
            'price': '519',
            'currency': 'US$',
            'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
        }
    };

function setProductDiv(selectedRadioBtn) {
    const data = phones[selectedRadioBtn.value]
    document.getElementById("phone_image").src = data.imageUrl;
    document.getElementById("phone_name").innerHTML = data.name;
    document.getElementById("phone_price").innerHTML =
        `${data.currency}${parseFloat(data.price).toFixed(2)}`;
}

const selectedRadioButton = (event) => {
    const selectedRadioBtn = event.target;
    if (selectedRadioBtn.checked) setProductDiv(selectedRadioBtn);
};

const addEventListenerToPhoneRadioButtons = () => {
    const radioButtons = document.getElementsByName("product");
    if (radioButtons) {
        radioButtons.forEach((radioBtn) => {
            radioBtn.addEventListener("change", selectedRadioButton)
        })
    }
}

addEventListenerToPhoneRadioButtons();

//Exercise 3

let stopWatchData = {
    "isPaused": true,
    "hours": 0,
    "minutes": 0,
    "seconds": 0,
    "milliseconds": 0
}

const resetStopWatchData = (isPaused = true) => {
    return {
        "isPaused": isPaused ?? true,
        "hours": 0,
        "minutes": 0,
        "seconds": 0,
        "milliseconds": 0
    }
}

const startStopBtn = document.getElementById("start_stop");

const setStopWatchValues = () => {
    document.getElementById("stopwatch").innerHTML =
        `${stopWatchData.hours.toString().padStart(2, "0")}:${stopWatchData.minutes.toString().padStart(2, "0")}:${stopWatchData.seconds.toString().padStart(2, "0")} ${stopWatchData.milliseconds.toString().padStart(3, "0")}`
}

const computeStopWatchValues = () => {
    stopWatchData.milliseconds += 1;
    if (stopWatchData.milliseconds === 1000) {
        stopWatchData.seconds += 1;
        stopWatchData.milliseconds = 0;
    }
    if (stopWatchData.seconds === 60) {
        stopWatchData.minutes += 1;
        stopWatchData.seconds = 0;
    }
    if (stopWatchData.minutes === 60) {
        stopWatchData.hours += 1;
        stopWatchData.minutes = 0;
    }
}

startStopBtn.onclick = () => {
    stopWatchData.isPaused = !stopWatchData.isPaused;

    const timeInterval = window.setInterval(() => {
        if (stopWatchData.isPaused) {
            window.clearInterval(timeInterval);
            return;
        }
        computeStopWatchValues();
        setStopWatchValues();
    }, 1)
}

const resetBtn = document.getElementById("reset");
resetBtn.onclick = () => {
    stopWatchData = resetStopWatchData(stopWatchData.isPaused);
    setStopWatchValues();
}