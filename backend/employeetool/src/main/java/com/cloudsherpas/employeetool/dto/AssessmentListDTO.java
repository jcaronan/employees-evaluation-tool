package com.cloudsherpas.employeetool.dto;

import java.util.List;

public class AssessmentListDTO {
    private List<AssessmentDTO> items;

    public List<AssessmentDTO> getItems(){
        return items;
    }

    public void setItems(List<AssessmentDTO> items) {
        this.items = items;
    }
}