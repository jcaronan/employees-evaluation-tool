package com.cloudsherpas.employeetool.api;

import com.cloudsherpas.employeetool.dto.AssessmentDTO;
import com.cloudsherpas.employeetool.dto.AssessmentListDTO;
import com.cloudsherpas.employeetool.service.AssessmentService;
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
public class AssessmentResource {
    @Autowired
    @Qualifier("assessmentService")
    @Lazy
    private AssessmentService assessmentService;

    @ApiMethod(
            name = "assessment.get",
            path = "assessment",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public AssessmentDTO getAssessment(@Named("id") final Long key) throws NotFoundException{
        final AssessmentDTO assessment = assessmentService.getAssessment(key);

        if(assessment == null){
            //err
        }
        return assessment;
    }

    @ApiMethod(
            name = "assessment.getAll",
            path = "assessment/all",
            httpMethod =ApiMethod.HttpMethod.GET
    )
    public List<AssessmentDTO> getAllAssessments() {
        return assessmentService.getAllAssessments();
    }

    @ApiMethod(
            name = "assessment.put",
            path = "assessment",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public Map<String, Long> addUpdateAssessment(final AssessmentDTO assessmentDTO) {
        final Long key = assessmentService.addUpdateAssessment(assessmentDTO);
        final Map<String, Long> result = new HashMap<>();

        if(key != null) {
            result.put("key", key);
        }
        return result;
    }

    @ApiMethod(
            name = "assessment.putBatch",
            path = "assessments",
            httpMethod =ApiMethod.HttpMethod.PUT
    )
    public List<AssessmentDTO> addAssessments(final AssessmentListDTO assessmentList) {
        return assessmentService.addUpdateAssessments(assessmentList.getItems());
    }

    @ApiMethod(
            name = "assessment.delete",
            path = "assessment",
            httpMethod =ApiMethod.HttpMethod.DELETE
    )
    public void deleteAssessment(@Named("id") final Long key){
        assessmentService.deleteAssessment(key);
    }
}





