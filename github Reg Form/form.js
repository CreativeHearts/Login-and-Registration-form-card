/** @format */

const wrapper = document.querySelector(".wrapper");
const regLink = document.querySelector(".register-link");
const logLink = document.querySelector(".login-link");
const pop = document.querySelector(".btn-click-pop");
const iconInner = document.querySelector(".close-login");

regLink.addEventListener("click", function () {
  wrapper.classList.add("active");
});
logLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});
pop.addEventListener("click", function () {
  wrapper.classList.add("log-active");
});

iconInner.addEventListener("click", function () {
  wrapper.classList.remove("log-active");
});
