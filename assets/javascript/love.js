function myFunction() {
    var txt;
    if (confirm("Do you like me?")) {
        txt = '&#x1F60D &#x1F618';
    } else {
    	txt = '&#x1F62D'
    }
    document.getElementById("answer").innerHTML = txt;
};