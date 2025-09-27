
const input = document.getElementById("thetext");
const img = document.getElementById("rimg");
const button = document.getElementById("generate-btn");

function generateCode() {
    const text = input.value.trim();
    if (text === "") {
        alert("Please enter some text or URL!");
        return;
    }
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
}
button.addEventListener("click", generateCode);