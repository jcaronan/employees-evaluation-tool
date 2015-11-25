package com.cloudsherpas.employeetool.api;

/**
 * Created by jcaronan on 11/25/15.
 */

import com.cloudsherpas.employeetool.service.MailService;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;


@Api(
        name = "toolEndpoint",
        version = "v1",
        namespace = @ApiNamespace(ownerDomain = "cloudsherpas.com", ownerName = "CloudSherpas"),
        description = "endpoints for employee evaluation tool"
)
public class MailResource {
    @Autowired
    @Qualifier("mailService")
    @Lazy
    private MailService mailService;

    @ApiMethod(
            name = "mail.send",
            path = "mail",
            httpMethod =ApiMethod.HttpMethod.POST
    )
    public void sendMail(@Named("link") final String link, @Named("emailAddress") final String email, @Named("name") final String name) {
        mailService.send(link, email, name);
    }

}

