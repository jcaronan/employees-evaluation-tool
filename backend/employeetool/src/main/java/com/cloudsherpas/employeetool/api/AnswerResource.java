package com.cloudsherpas.employeetool.api;

import com.cloudsherpas.employeetool.dto.AnswerDTO;
import com.cloudsherpas.employeetool.dto.AnswerListDTO;
import com.cloudsherpas.employeetool.service.AnswerService;
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
public class AnswerResource {
    @Autowired
    @Qualifier("answerService")
    @Lazy
    private AnswerService answerService;

    @ApiMethod(
            name = "answer.get",
            path = "answer",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public AnswerDTO getAnswer(@Named("id") final Long key) throws NotFoundException{
        final AnswerDTO answer = answerService.getAnswer(key);

        if(answer == null){
            //err
        }
        return answer;
    }

    @ApiMethod(
            name = "answer.getByQuestionId",
            path = "answer/question",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public AnswerDTO getAnswerByQuestionId(@Named("questionId") final Long qkey, @Named("assessmentId") final Long akey) throws NotFoundException{
        final AnswerDTO answer = answerService.getAnswerByQuestionId(qkey, akey);

        if(answer == null){
            //err
        }
        return answer;
    }

    @ApiMethod(
            name = "answer.getAll",
            path = "answer/all",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public List<AnswerDTO> getAllAnswers() {
        return answerService.getAllAnswers();
    }

    @ApiMethod(
            name = "answer.getAllByAssessmentId",
            path = "answer/assessment",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public List<AnswerDTO> getAllAnswersByAssessmentId(@Named("assessmentId") final Long key) {
        return answerService.getAllAnswersByAssessmentId(key);
    }

    @ApiMethod(
            name = "answer.put",
            path = "answer",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public Map<String, Long> addUpdateAnswer(final AnswerDTO answerDTO) {
        final Long key = answerService.addUpdateAnswer(answerDTO);
        final Map<String, Long> result = new HashMap<>();

        if(key != null) {
            result.put("key", key);
        }
        return result;
    }

    @ApiMethod(
            name = "answer.putBatch",
            path = "answers",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public List<AnswerDTO> addAnswers(final AnswerListDTO answerList) {
        return answerService.addUpdateAnswers(answerList.getItems());
    }

    @ApiMethod(
            name = "answer.delete",
            path = "answer",
            httpMethod =ApiMethod.HttpMethod.DELETE
    )
    public void deleteAnswer(@Named("id") final Long key){
        answerService.deleteAnswer(key);
    }
}
