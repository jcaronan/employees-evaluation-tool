package com.cloudsherpas.employeetool.dao;

import com.cloudsherpas.employeetool.model.Answer;

import java.util.List;

public interface AnswerDao extends BaseDao<Answer>{

    List<Answer> getAllAnswersByAssessmentId(Long key);
    Answer getAnswerByQuestionId(Long qkey, Long akey);
}