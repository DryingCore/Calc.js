export default function calculate() {
	const resultInput = document.querySelector("#result");
	const result = eval(input.value);
	resultInput.value = "ERROR";
	resultInput.classList.add("error");
	resultInput.value = result;
	resultInput.classList.remove("error");
}
