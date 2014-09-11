package com.test.glassfish.websockrest;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * REST Web Service
 *
 *
 */
@Path("rest")
public class MyRestEndpoint {

    @POST
    @Produces("text/plain")
    public String getXml(String payload) {
        System.out.println("payload :" + payload);
    	return payload;
    }
}