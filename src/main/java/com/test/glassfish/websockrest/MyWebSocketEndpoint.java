package com.test.glassfish.websockrest;

import javax.websocket.OnMessage;
import javax.websocket.server.ServerEndpoint;


/**
 *
 */
@ServerEndpoint("/restvsws/websocket")
public class MyWebSocketEndpoint {

    @OnMessage
    public String echoText(String text) {
        System.out.println("text :"+text);
    	return text;
    }
}