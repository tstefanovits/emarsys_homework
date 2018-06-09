define([
    '../js/HolidayPlanner'
], function (Calculator) {

    const testDiv = document.getElementsByClassName("test")[0];
    function assert(value, description) {
        const result = value ? "pass" : "fail";
        const p = document.createElement("li");
        p.innerText = `${result} - ${description}`;
        testDiv.appendChild(p);
    }