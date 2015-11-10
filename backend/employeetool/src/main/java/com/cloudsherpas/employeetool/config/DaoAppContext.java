package com.cloudsherpas.employeetool.config;

import com.cloudsherpas.employeetool.dao.EmployeeDao;
import com.cloudsherpas.employeetool.dao.impl.EmployeeDaoImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@Configuration
@Lazy
public class DaoAppContext {

    @Bean(name="employeeDao")
    public EmployeeDao getEmployeeDao() {
        return new EmployeeDaoImpl();
    }
}