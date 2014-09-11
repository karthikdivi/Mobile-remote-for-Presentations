package com.test.glassfish.websockrest;


import java.io.IOException;

import javax.websocket.EncodeException;
import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint("/presentationDesktop")
public class PresentationDesktop {
	  @OnMessage
	    public void message(String message, Session client) throws IOException, EncodeException {
	        for (Session peer : client.getOpenSessions()) {
	            peer.getBasicRemote().sendObject(message);
	        }
	    }
}
