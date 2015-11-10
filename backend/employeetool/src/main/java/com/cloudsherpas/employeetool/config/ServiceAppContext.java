package com.cloudsherpas.employeetool.config;

import com.cloudsherpas.employeetool.service.EmployeeService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@Configuration
@Lazy
public class ServiceAppContext {
    @Bean(name="employeeService")
    public EmployeeService getEmployeeService(){
        return new EmployeeService();
    }
}