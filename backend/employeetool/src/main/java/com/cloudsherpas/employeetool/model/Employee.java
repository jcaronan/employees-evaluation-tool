package com.cloudsherpas.employeetool.model;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Employee {

    @Id
    private Long id;
    private String name;
    private String status;
    private String emailAddress;

    public void setId(Long id){
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setEmailAddress(String emailAddress){
        this.emailAddress = emailAddress;
    }

    public String getEmailAddress(){
        return emailAddress;
    }

}