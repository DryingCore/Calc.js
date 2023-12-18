import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { AddNumber, Prevent, clear } from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
	charKeyBtn.addEventListener("click", AddNumber);
});

document.getElementById("clear").addEventListener("click", clear);

input.addEventListener("keydown", Prevent);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
