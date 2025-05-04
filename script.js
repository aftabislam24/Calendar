let today = new Date();

let days = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];

let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];

let date = document.querySelector(`.date`);
let day = document.querySelector(`.day`);
let month = document.querySelector(`.month`);
let year = document.querySelector(`.year`);

let todayDate = today.getDate();
let todayDay = today.getDay();
let todayMonth = today.getMonth();
let todayYear = today.getFullYear();

date.innerHTML = (todayDate<10?"0":"")+todayDate;
day.innerHTML = days[todayDay];
month.innerHTML = months[todayMonth];
year.innerHTML = todayYear;