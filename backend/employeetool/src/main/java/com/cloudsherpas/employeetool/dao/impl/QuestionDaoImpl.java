/**
 * Created by jcaronan on 11/10/15.
 */
package com.cloudsherpas.employeetool.dao.impl;

import com.cloudsherpas.employeetool.dao.QuestionDao;
import com.cloudsherpas.employeetool.model.Question;

public class QuestionDaoImpl extends BaseDaoImpl<Question> implements QuestionDao {
    public QuestionDaoImpl() {
        super(Question.class);
    }
}
