var input1 = document.querySelector("#firstName"),
    input2 = document.querySelector("#lastName"),
    output = document.querySelector("#output");
input1.addEventListener("keyup", function () {
    showName();
});
input2.addEventListener("keyup", function () {
    showName();
});

function showName() {
    output.textContent = "Hello " + input1.value + " " + input2.value + "!";
    document.querySelector("#face").style.display = "inline";
    document.querySelector("#hand").style.display = "inline";
}

















