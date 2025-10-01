const InputValue = document.getElementById("input");
const SubmitValueInt = document.getElementById("submit");
const SubmitValueFloat = document.getElementById("submit1");
const SubmitValueBinary = document.getElementById("submit2");

const OutputValue = document.getElementById("output");
const ClearValue = document.getElementById("clear");


const MainPage = document.getElementById("mainpage")

SubmitValueInt.addEventListener("click", () => {

    OutputValue.innerHTML = Math.floor(Math.random() * InputValue.value);
});


SubmitValueFloat.addEventListener("click", () => {
    OutputValue.innerHTML = Math.fround(Math.random() * InputValue.value)
});

SubmitValueBinary.addEventListener("click", () => {
    let num = Math.floor(Math.random() * InputValue.value); 
    OutputValue.innerHTML = num.toString(2);
});


ClearValue.addEventListener("click", () => {
    OutputValue.innerHTML = "Empty";
    InputValue.innerHTML = null;
    
});
