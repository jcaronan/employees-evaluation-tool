package com.cloudsherpas.employeetool.api;

import com.cloudsherpas.employeetool.dto.QuestionDTO;
import com.cloudsherpas.employeetool.dto.QuestionListDTO;
import com.cloudsherpas.employeetool.service.QuestionService;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(
        name = "toolEndpoint",
        version = "v1",
        namespace = @ApiNamespace(ownerDomain = "cloudsherpas.com", ownerName = "CloudSherpas"),
        description = "endpoints for employee evaluation tool"
)
public class QuestionResource {
    @Autowired
    @Qualifier("questionService")
    @Lazy
    private QuestionService questionService;

    @ApiMethod(
            name = "question.get",
            path = "question",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public QuestionDTO getQuestion(@Named("id") final Long key) throws NotFoundException{
        final QuestionDTO question = questionService.getQuestion(key);

        if(question == null){
            //err
        }
        return question;
    }

    @ApiMethod(
            name = "question.getAll",
            path = "question/all",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public List<QuestionDTO> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @ApiMethod(
            name = "question.put",
            path = "question",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public Map<String, Long> addUpdateQuestion(final QuestionDTO questionDTO) {
        final Long key = questionService.addUpdateQuestion(questionDTO);
        final Map<String, Long> result = new HashMap<>();

        if(key != null) {
            result.put("key", key);
        }
        return result;
    }

    @ApiMethod(
            name = "question.putBatch",
            path = "questions",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public List<QuestionDTO> addQuestions(final QuestionListDTO questionList) {
        return questionService.addUpdateQuestions(questionList.getItems());
    }

    @ApiMethod(
            name = "question.delete",
            path = "question",
            httpMethod =ApiMethod.HttpMethod.DELETE
    )
    public void deleteQuestion(@Named("id") final Long key){
        questionService.deleteQuestion(key);
    }
}





