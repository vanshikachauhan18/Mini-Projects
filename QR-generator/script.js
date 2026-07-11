const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR(){

    if(qrText.value.length === 0){
        alert("Please enter some text.");
        return;
    }

    qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="
    + encodeURIComponent(qrText.value);

    qrImage.style.display = "block";
}