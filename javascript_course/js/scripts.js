"use strict";
const getDayDifference = (date1, date2) => {
    console.log(date1);
    console.log(date2);
    if (date1 && date2) 
        return (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

    window.alert("An error occurred, please make sure the parameters passed are valid timestamps");
}
const date1 = new Date(2020, 2, 26);
const date2 = new Date(2020, 3, 2);

document.getElementById("delivery_time").innerHTML = (Math.floor(getDayDifference(date1, date2))).toString();