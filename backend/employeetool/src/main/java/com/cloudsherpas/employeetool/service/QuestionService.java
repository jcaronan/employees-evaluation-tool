package com.cloudsherpas.employeetool.service;

import com.cloudsherpas.employeetool.dao.QuestionDao;
import com.cloudsherpas.employeetool.dto.QuestionDTO;
import com.cloudsherpas.employeetool.model.Question;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.ArrayList;
import java.util.List;

public class QuestionService {
    @Autowired()
    @Qualifier("questionDao")
    @Lazy
    private QuestionDao questionDao;

    private ModelMapper modelMapper;

    public QuestionService() {
        modelMapper = new ModelMapper();
    }

    public QuestionDTO getQuestion(final Long key){
        QuestionDTO result = null;
        Question question = questionDao.get(key);

        if (question != null){
            result = modelMapper.map(question, QuestionDTO.class);
        }
        return result;
    }

    public List <QuestionDTO> getAllQuestions() {
        List<Question> questionList = questionDao.getAll();
        List<QuestionDTO> questionDTOList = new ArrayList<>();

        for (Question question : questionList){
            questionDTOList.add(modelMapper.map(question, QuestionDTO.class));
        }

        return questionDTOList;
    }

    public Long addUpdateQuestion(final QuestionDTO questionDTO) {
        return questionDao.put(modelMapper.map(questionDTO, Question.class));
    }

    public List<QuestionDTO> addUpdateQuestions (final List<QuestionDTO> questionDTOList) {
        final List<Question> questionList = new ArrayList<>();

        for (QuestionDTO questionDTO : questionDTOList) {
            questionList.add(modelMapper.map(questionDTO, Question.class));
        }

        final List<Question> tmpList = questionDao.putAll(questionList);

        final List<QuestionDTO> questionRespList = new ArrayList<>();
        if(tmpList != null){
            for (Question tmpEmp : tmpList) {
                questionRespList.add(modelMapper.map(tmpEmp, QuestionDTO.class));
            }
        }

        return questionRespList;
    }

    public void deleteQuestion(final Long key) {
        questionDao.delete(key);
    }
}

