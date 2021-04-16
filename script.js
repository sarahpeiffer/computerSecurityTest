
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


}