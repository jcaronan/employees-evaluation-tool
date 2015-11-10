package com.cloudsherpas.employeetool.api;

import com.cloudsherpas.employeetool.dto.EmployeeDTO;
import com.cloudsherpas.employeetool.dto.EmployeeListDTO;
import com.cloudsherpas.employeetool.service.EmployeeService;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(
        name = "toolEndpoint",
        version = "v1",
        namespace = @ApiNamespace(ownerDomain = "cloudsherpas.com", ownerName = "CloudSherpas"),
        description = "endpoints for employee evaluation tool"
)
public class EmployeeResource {
    @Autowired
    @Qualifier("employeeService")
    @Lazy
    private EmployeeService employeeService;

    @ApiMethod(
            name = "employee.get",
            path = "employee",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public EmployeeDTO getEmployee(@Named("id") final Long key) throws NotFoundException{
        final EmployeeDTO employee = employeeService.getEmployee(key);

        if(employee == null){
            //err
        }
        return employee;
    }

    @ApiMethod(
            name = "employee.getAll",
            path = "employee/all",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @ApiMethod(
            name = "employee.put",
            path = "employee",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public Map<String, Long> addUpdateEmployee(final EmployeeDTO employeeDTO) {
        final Long key = employeeService.addUpdateEmployee(employeeDTO);
        final Map<String, Long> result = new HashMap<>();

        if(key != null) {
            result.put("key", key);
        }
        return result;
    }

    @ApiMethod(
            name = "employee.putBatch",
            path = "employees",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public List<EmployeeDTO> addEmployees(final EmployeeListDTO employeeList) {
        return employeeService.addUpdateEmployees(employeeList.getItems());
    }

    public void deleteEmployee(@Named("id") final Long key){
        employeeService.deleteEmployee(key);
    }
}





