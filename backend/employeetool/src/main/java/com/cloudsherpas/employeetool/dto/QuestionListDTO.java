package com.cloudsherpas.employeetool.dto;

import java.util.List;

public class QuestionListDTO {
    private List<QuestionDTO> items;

    public List<QuestionDTO> getItems(){
        return items;
    }

    public void setItems(List<QuestionDTO> items) {
        this.items = items;
    }
}