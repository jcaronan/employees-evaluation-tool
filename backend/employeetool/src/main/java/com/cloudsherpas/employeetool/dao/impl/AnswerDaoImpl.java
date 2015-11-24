/**
 * Created by jcaronan on 11/10/15.
 */
package com.cloudsherpas.employeetool.dao.impl;

import com.cloudsherpas.employeetool.dao.AnswerDao;
import com.cloudsherpas.employeetool.dao.DaoManager;
import com.cloudsherpas.employeetool.model.Answer;
import com.googlecode.objectify.Objectify;

import java.util.List;

public class AnswerDaoImpl extends BaseDaoImpl<Answer> implements AnswerDao {
    private final DaoManager DAO_MANAGER = DaoManager.getInstance();
    public AnswerDaoImpl() {
        super(Answer.class);
    }

    @Override
    public List<Answer> getAllAnswersByAssessmentId(final Long key) {
        final Objectify ofy = DAO_MANAGER.getObjectify();
        return ofy.load().type(Answer.class).filter("assessmentId", key).list();
    }

    @Override
    public Answer getAnswerByQuestionId(final Long qkey, Long akey) {
        final Objectify ofy = DAO_MANAGER.getObjectify();
        return ofy.load().type(Answer.class).filter("questionId", qkey).filter("assessmentId", akey).first().now();
    }
}
