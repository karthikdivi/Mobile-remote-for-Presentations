var restUri = "http://" + document.location.host + document.location.pathname + "webresources/rest";
console.log("Sending POST request to " + restUri);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(function() {
            // Update progress bar here
            restRxBar.value += 100 / times.value;
            if (restRxBar.value == "100") {
                restEndTime = new Date().getTime();
                writeToScreen(restOutput, "Total execution time: " + (restEndTime - restStartTime) + " ms");
                writeToScreen(restOutput, "<hr>");
            }
        }, 0);
    }
};

var restSendBar = document.getElementById("restSendProgressBar");
var restRxBar = document.getElementById("restReceiveProgressBar");
var restStartTime;
var restEndTime;

var restOutput = document.getElementById("restOutput");

function restEchoText() {
    restClearProgressBar();
    writeToScreen(restOutput, "Sending " + times.value + " messages of \"" + size.value + "\" byte(s)");
    payload = "";
    for (var i = 0; i < size.value; i++) {
        payload += "x";
    }
    restStartTime = new Date().getTime();
    for (var i = 0; i < times.value; i++) {
    	xhr.open("POST", restUri, false);
   //     alert("sending :"+i);
    //	alert(xhr);
        xhr.send(payload);
        restSendBar.value += 100 / times.value;
    }
}

function restClearProgressBar() {
    restSendBar.value = 0;
    restRxBar.value = 0;
}

function clearProgressBar() {
    wsClearProgressBar();
    restClearProgressBar();
}