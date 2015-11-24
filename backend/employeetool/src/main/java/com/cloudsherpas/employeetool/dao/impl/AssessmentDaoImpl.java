/**
 * Created by jcaronan on 11/10/15.
 */
package com.cloudsherpas.employeetool.dao.impl;

import com.cloudsherpas.employeetool.dao.AssessmentDao;
import com.cloudsherpas.employeetool.dao.DaoManager;
import com.cloudsherpas.employeetool.model.Assessment;
import com.googlecode.objectify.Objectify;

public class AssessmentDaoImpl extends BaseDaoImpl<Assessment> implements AssessmentDao {
    private final DaoManager DAO_MANAGER = DaoManager.getInstance();

    public AssessmentDaoImpl() {
        super(Assessment.class);
    }

    @Override
    public Assessment lookupEmployee(final Long key) {
        final Objectify ofy = DAO_MANAGER.getObjectify();
        return ofy.load().type(Assessment.class).filter("employeeId", key).first().now();
    }
}
