package com.cloudsherpas.employeetool.dao;

import com.cloudsherpas.employeetool.model.Question;
import com.cloudsherpas.employeetool.model.Employee;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyService;

public class DaoManager {
    private static DaoManager self;

    static{
        registerEntities();
    }

    private DaoManager() {}

    public static DaoManager getInstance(){
        if (self == null){
            self = new DaoManager();
        }
        return self;
    }

    private static void registerEntities() {
        ObjectifyService.begin();
        ObjectifyService.factory().register(Employee.class);
        ObjectifyService.factory().register(Question.class);
    }

    public Objectify getObjectify() {
        return ObjectifyService.ofy();
    }
}