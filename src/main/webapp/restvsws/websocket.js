var wsUri = "ws://" + document.location.host + document.location.pathname + "websocket";
console.log("Connecting to " + wsUri);
var websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };

var wsSendBar = document.getElementById("wsSendProgressBar");
var wsRxBar = document.getElementById("wsReceiveProgressBar");
var wsStartTime;
var wsEndTime;
var payload = "";

var wsOutput = document.getElementById("wsOutput");

function echoText() {
    clearProgressBar();
    if (document.getElementById("rest").checked) {
        restEchoText();
    }
    if (document.getElementById("websocket").checked) {
        wsEchoText();
    }
}

function onPageClose() {
	alert("closing websocket");
	websocket.close();
}

function wsEchoText() {
    wsClearProgressBar();

    if ((times.value % 5) != 0) {
        var oldTimes = times.value;
        times.value -= times.value % 5;
        writeToScreen(wsOutput, "Resetting the value " + oldTimes + " to " + times.value);
    }
    writeToScreen(wsOutput, "Sending " + times.value + " messages of \"" + size.value + "\" byte(s)");
    payload = "";
    for (var i = 0; i < size.value; i++) {
        payload += "x";
    }
    wsStartTime = new Date().getTime();
    for (var i=0; i<times.value; i++) {
        websocket.send(payload);
        wsSendBar.value += 100 / times.value;
    }
}

function wsClearProgressBar() {
    wsSendBar.value = 0;
    wsRxBar.value = 0;
}

function clearLog() {
    clearProgressBar();
    wsOutput.innerHTML = '';
}

function onOpen() {
//    writeToScreen(wsOutput, "Connected to "+ wsUri + "<hr>");
}

function onMessage(evt) {
    if (evt.data == payload) {
        wsRxBar.value += 100 / times.value;
        if (wsRxBar.value == "100") {
            wsEndTime = new Date().getTime();
            writeToScreen(wsOutput, "Total execution time: " + (wsEndTime - wsStartTime) + " ms");
            writeToScreen(wsOutput, "<hr>");
        }
    } else {
        writeToScreen(evt.data);
    }
}

function onError(evt) {
    writeToScreen(wsOutput, '<span style="color: red;">ERROR:</span> ' + evt.data);
}

function writeToScreen(div, message) {
    div.innerHTML += message + "<br/>";
}