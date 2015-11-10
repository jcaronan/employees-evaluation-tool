package com.cloudsherpas.employeetool.dto;

import java.util.List;

public class EmployeeListDTO {
    private List<EmployeeDTO> items;

    public List<EmployeeDTO> getItems(){
        return items;
    }

    public void setItems(List<EmployeeDTO> items) {
        this.items = items;
    }
}