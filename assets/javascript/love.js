function myFunction() {
    var txt;
    if (confirm("Do you like me?")) {
        txt = '&#x1F60D &#x1F618';
        window.open("https://www.vivalasvegasweddings.com/themed-lasvegasweddings.htm");

    } else {
    	txt = '&#x1F62D'
    	window.open("https://en.wikipedia.org/wiki/Bye,_Felicia");
    }
    document.getElementById("answer").innerHTML = txt;
    document.getElementById("startbutt").style.opacity = "0"
};