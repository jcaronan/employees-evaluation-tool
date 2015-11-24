package com.cloudsherpas.employeetool.service;

import com.cloudsherpas.employeetool.dao.AnswerDao;
import com.cloudsherpas.employeetool.dto.AnswerDTO;
import com.cloudsherpas.employeetool.model.Answer;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.ArrayList;
import java.util.List;

public class AnswerService {
    @Autowired()
    @Qualifier("answerDao")
    @Lazy
    private AnswerDao answerDao;

    private ModelMapper modelMapper;

    public AnswerService() {
        modelMapper = new ModelMapper();
    }

    public AnswerDTO getAnswer(final Long key){
        AnswerDTO result = null;
        Answer answer = answerDao.get(key);

        if (answer != null){
            result = modelMapper.map(answer, AnswerDTO.class);
        }
        return result;
    }

    public AnswerDTO getAnswerByQuestionId(final Long qkey, final Long akey){
        AnswerDTO result = null;
        Answer answer = answerDao.getAnswerByQuestionId(qkey, akey);

        if (answer != null){
            result = modelMapper.map(answer, AnswerDTO.class);
        }
        return result;
    }

    public List <AnswerDTO> getAllAnswers() {
        List<Answer> answerList = answerDao.getAll();
        List<AnswerDTO> answerDTOList = new ArrayList<>();

        for (Answer answer : answerList){
            answerDTOList.add(modelMapper.map(answer, AnswerDTO.class));
        }

        return answerDTOList;
    }

    public List <AnswerDTO> getAllAnswersByAssessmentId(final Long key) {
        List<Answer> answerList = answerDao.getAllAnswersByAssessmentId(key);
        List<AnswerDTO> answerDTOList = new ArrayList<>();

        for (Answer answer : answerList){
            answerDTOList.add(modelMapper.map(answer, AnswerDTO.class));
        }

        return answerDTOList;
    }

    public Long addUpdateAnswer(final AnswerDTO answerDTO) {
        return answerDao.put(modelMapper.map(answerDTO, Answer.class));
    }

    public List<AnswerDTO> addUpdateAnswers (final List<AnswerDTO> answerDTOList) {
        final List<Answer> answerList = new ArrayList<>();

        for (AnswerDTO answerDTO : answerDTOList) {
            answerList.add(modelMapper.map(answerDTO, Answer.class));
        }

        final List<Answer> tmpList = answerDao.putAll(answerList);

        final List<AnswerDTO> answerRespList = new ArrayList<>();
        if(tmpList != null){
            for (Answer tmpEmp : tmpList) {
                answerRespList.add(modelMapper.map(tmpEmp, AnswerDTO.class));
            }
        }

        return answerRespList;
    }

    public void deleteAnswer(final Long key) {
        answerDao.delete(key);
    }
}

