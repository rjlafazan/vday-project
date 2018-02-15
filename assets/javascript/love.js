function myFunction() {
    var txt;
    if (confirm("Do you like me?")) {
        txt = '&#x1F60D';
    }
    document.getElementById("answer").innerHTML = txt;
};