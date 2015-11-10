package com.cloudsherpas.employeetool.service;

import com.cloudsherpas.employeetool.dao.EmployeeDao;
import com.cloudsherpas.employeetool.dto.EmployeeDTO;
import com.cloudsherpas.employeetool.model.Employee;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.ArrayList;
import java.util.List;

public class EmployeeService {
    @Autowired()
    @Qualifier("employeeDao")
    @Lazy
    private EmployeeDao employeeDao;

    private ModelMapper modelMapper;

    public EmployeeService() {
        modelMapper = new ModelMapper();
    }

    public EmployeeDTO getEmployee(final Long key){
        EmployeeDTO result = null;
        Employee employee = employeeDao.get(key);

        if (employee != null){
            result = modelMapper.map(employee, EmployeeDTO.class);
        }
        return result;
    }

    public List <EmployeeDTO> getAllEmployees() {
        List<Employee> employeeList = employeeDao.getAll();
        List<EmployeeDTO> employeeDTOList = new ArrayList<>();

        for (Employee employee : employeeList){
            employeeDTOList.add(modelMapper.map(employee, EmployeeDTO.class));
        }

        return employeeDTOList;
    }

    public Long addUpdateEmployee(final EmployeeDTO employeeDTO) {
        return employeeDao.put(modelMapper.map(employeeDTO, Employee.class));
    }

    public List<EmployeeDTO> addUpdateEmployees (final List<EmployeeDTO> employeeDTOList) {
        final List<Employee> employeeList = new ArrayList<>();

        for (EmployeeDTO employeeDTO : employeeDTOList) {
            employeeList.add(modelMapper.map(employeeDTO, Employee.class));
        }

        final List<Employee> tmpList = employeeDao.putAll(employeeList);

        final List<EmployeeDTO> employeeRespList = new ArrayList<>();
        if(tmpList != null){
            for (Employee tmpEmp : tmpList) {
                employeeRespList.add(modelMapper.map(tmpEmp, EmployeeDTO.class));
            }
        }

        return employeeRespList;
    }

    public void deleteEmployee(final Long key) {
        employeeDao.delete(key);
    }
}

