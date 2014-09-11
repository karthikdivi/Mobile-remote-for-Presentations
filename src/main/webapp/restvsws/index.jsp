<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>REST vs WebSocket</title>

    </head>
    <body onunload="onPageClose()">
        <link rel="stylesheet" href="stylesheet.css" type="text/css">
        <h1>REST vs WebSocket</h1>

        <div style="text-align: center;">
            <form action="">
                Payload size: <input id="size" value="1" type="text"><br>
                How many times ?: <input id="times" value="10" type="text"><br>
                <form name="inputForm">
                Protocol: <input type="checkbox" name="protocol" id="rest" checked="true">REST
                            <input type="checkbox" name="protocol" id="websocket" checked="true">WebSocket
                </form><br/>
                <input onclick="echoText();" value="Echo" type="button">
                <input onclick="clearProgressBar();" value="Clear" type="button">
            </form>
            <table>
                <tr>
                    <th>
                        REST Endpoint
                    </th>
                    <th>
                        WebSocket
                    </th>
                </tr>
                <tr>
                    <td align="left">
                        Sending messages:<br/>
                        <progress id="restSendProgressBar" max="100" value="0">
                        </progress>
                        Receiving messages:<br/>
                        <progress id="restReceiveProgressBar" max="100" value="0">
                        </progress>
                        <div id="restOutput"></div>
                    </td>
                    <td align="left">
                        Sending messages:<br/>
                        <progress id="wsSendProgressBar" max="100" value="0">
                        </progress>
                        Receiving messages:<br/>
                        <progress id="wsReceiveProgressBar" max="100" value="0">
                        </progress>
                        <div id="wsOutput"></div>
                    </td>
                </tr>
            </table>
        </div>

        <script language="javascript" type="text/javascript" src="websocket.js"> </script>
        <script language="javascript" type="text/javascript" src="rest.js"> </script>
        </script>
    </body>
</html>