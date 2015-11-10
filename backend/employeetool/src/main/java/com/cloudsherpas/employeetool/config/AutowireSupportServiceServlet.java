package com.cloudsherpas.employeetool.config;


import com.google.api.server.spi.SystemServiceServlet;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;


public class AutowireSupportServiceServlet extends SystemServiceServlet {

    @Override
    protected <T> T createService(Class<T> arg0) {
        T service = super.createService(arg0);
        SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(service);
        return service;
    }
}