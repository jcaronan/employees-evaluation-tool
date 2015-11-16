/**
 * Created by jcaronan on 11/10/15.
 */
package com.cloudsherpas.employeetool.dao.impl;

import com.cloudsherpas.employeetool.dao.AssessmentDao;
import com.cloudsherpas.employeetool.model.Assessment;

public class AssessmentDaoImpl extends BaseDaoImpl<Assessment> implements AssessmentDao {
    public AssessmentDaoImpl() {
        super(Assessment.class);
    }
}
