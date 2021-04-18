
function submitForm() {
    console.log("submit");
    var name = document.getElementById("name").value;
    console.log(name);
    var size = "small";
    if(document.getElementById("medium").checked) {
        size = "medium";
    }
    if(document.getElementById("large").checked) {
        size = "large";
    }
    console.log(size);
    console.log(document.getElementById("honeypot").value);
    if(document.getElementById("honeypot").value != "") {
        botDetected();
    }
    else {
        alert("successful form submit");
    }
    document.getElementById("form").reset();

}

function botDetected() {
    console.log("bot detected");
    alert("bot activity detected");
}