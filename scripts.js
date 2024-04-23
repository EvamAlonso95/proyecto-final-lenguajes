var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    showTab(currentTab);
});

function showTab(showTab) {

    var x = document.getElementsByClassName("tab");
    if (x.length > showTab) {
        x[showTab].style.display = "block";
    }

    if (showTab == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (showTab == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {

    var x = document.getElementsByClassName("tab");
    if (n == 'reset') {
        n = -currentTab
    }
    // TO DO Descomentar 
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    var progress = document.getElementById("formulario-progress-bar");
    progress.style.width = (100 / x.length) * (currentTab + 1) + '%';

    if (currentTab >= x.length) {
        document.getElementsByClassName('progress')[0].style.display = "none"
        document.getElementById("buttonControl").style.cssText = 'display:none !important';
        document.getElementById("register").style.display = "none";
        document.getElementById("text-message").style.display = "block";




    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // if (x[currentTab].querySelectorAll("input[type=radio]:checked").length == 0) {
    //     return false;
    // }
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") { //|| (y[i].getAttribute("type") == "radio" && y[i].checked == false)
            y[i].className += " invalid"; //TO DO Revisar
            valid = false;
        }
    }
    // if (valid) { document.getElementsByClassName("step")[currentTab].className += " finish"; } // TO DO Revisar
    return valid;
}
