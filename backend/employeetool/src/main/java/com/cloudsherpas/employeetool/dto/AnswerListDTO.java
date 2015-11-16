package com.cloudsherpas.employeetool.dto;

import java.util.List;

public class AnswerListDTO {
    private List<AnswerDTO> items;

    public List<AnswerDTO> getItems(){
        return items;
    }

    public void setItems(List<AnswerDTO> items) {
        this.items = items;
    }
}