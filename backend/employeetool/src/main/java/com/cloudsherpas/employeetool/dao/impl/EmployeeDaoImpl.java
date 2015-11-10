/**
 * Created by jcaronan on 11/10/15.
 */
package com.cloudsherpas.employeetool.dao.impl;

import com.cloudsherpas.employeetool.dao.EmployeeDao;
import com.cloudsherpas.employeetool.model.Employee;

public class EmployeeDaoImpl extends BaseDaoImpl<Employee> implements EmployeeDao {
    public EmployeeDaoImpl() {
        super(Employee.class);
    }
}
