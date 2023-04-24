// Getting current Date
let currentDate = new Date();
let dd = currentDate.getUTCDate();
let mm = currentDate.getUTCMonth() + 1;
var yy = currentDate.getFullYear();

// console.log(`Today is ${dd}--${mm}--${yy}`);

// declaring variables
const userDay = document.querySelector(".Uday");
const userMonth = document.querySelector(".Umonth");
const userYear = document.querySelector(".Uyear");
const Para1 = document.querySelector(".required1");
const Para2 = document.querySelector(".required2");
const Para3 = document.querySelector(".required3");
const topPara1 = document.querySelector(".XDA");
const topPara2 = document.querySelector(".XDB");
const topPara3 = document.querySelector(".XDC");
const spanDay = document.querySelector(".sday");
const spanmonth = document.querySelector(".smonth");
const spanyear = document.querySelector(".syear");

// checking for any errors

function emptyErrorDay() {
  if (userDay.value <= 0 || userDay.value > 31) {
    Para1.classList.add("show");
    topPara1.classList.remove("success");
    topPara1.classList.add("error");
    spanDay.innerText = "--";
  } else {
    Para1.classList.remove("show");
    topPara1.classList.add("success");
    let numberOfDays = Math.abs(dd - parseInt(userDay.value));
    spanDay.innerText = numberOfDays;
  }
}

function emptyErrorMonth() {
  if (userMonth.value <= 0 || userMonth.value > 12) {
    Para2.classList.add("show");
    topPara2.classList.remove("success");
    topPara2.classList.add("error");
    spanmonth.innerText = "--";
  } else {
    // spanDay.imnerText = numberOfDays;
    Para2.classList.remove("show");
    topPara2.classList.add("success");
    let numberOfMonths = Math.abs(mm - parseInt(userMonth.value));
    spanmonth.innerText = numberOfMonths;
  }
}

function emptyErrorYear() {
  if (userYear.value > yy) {
    Para3.classList.add("show");
    topPara3.classList.remove("success");
    topPara3.classList.add("error");
    spanyear.innerText = "--";
  } else {
    Para3.classList.remove("show");
    topPara3.classList.add("success");
    let numberOfYears = yy - parseInt(userYear.value);
    spanyear.innerText = numberOfYears;
  }
}

// getting user inputs
const form = document.querySelector("form");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  emptyErrorDay();
  emptyErrorMonth();
  emptyErrorYear();

  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);

  const day = obj.userDay;
  const month = obj.userMonth;
  const year = obj.userYear;
});
