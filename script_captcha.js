
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
    document.getElementById("form").reset();
    if(document.getElementById("honeypot").value != "") {
        console.log("bot detected");
    }
    var v = grecaptcha.getResponse();
    if(v.length == 0)
    {
        document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
        return false;
    }
    else
    {
        document.getElementById('captcha').innerHTML="Captcha completed";
        return true; 
    }

}