package com.cloudsherpas.employeetool.dao;

import com.cloudsherpas.employeetool.model.Assessment;

public interface AssessmentDao extends BaseDao<Assessment>{
    Assessment lookupEmployee(Long key);
}