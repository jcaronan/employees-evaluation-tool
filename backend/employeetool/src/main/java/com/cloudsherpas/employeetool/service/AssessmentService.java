package com.cloudsherpas.employeetool.service;

import com.cloudsherpas.employeetool.dao.AssessmentDao;
import com.cloudsherpas.employeetool.dto.AssessmentDTO;
import com.cloudsherpas.employeetool.model.Assessment;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import java.util.ArrayList;
import java.util.List;

public class AssessmentService {
    @Autowired()
    @Qualifier("assessmentDao")
    @Lazy
    private AssessmentDao assessmentDao;

    private ModelMapper modelMapper;

    public AssessmentService() {
        modelMapper = new ModelMapper();
    }

    public AssessmentDTO getAssessment(final Long key){
        AssessmentDTO result = null;
        Assessment assessment = assessmentDao.get(key);

        if (assessment != null){
            result = modelMapper.map(assessment, AssessmentDTO.class);
        }
        return result;
    }

    public List <AssessmentDTO> getAllAssessments() {
        List<Assessment> assessmentList = assessmentDao.getAll();
        List<AssessmentDTO> assessmentDTOList = new ArrayList<>();

        for (Assessment assessment : assessmentList){
            assessmentDTOList.add(modelMapper.map(assessment, AssessmentDTO.class));
        }

        return assessmentDTOList;
    }

    public Long addUpdateAssessment(final AssessmentDTO assessmentDTO) {
        return assessmentDao.put(modelMapper.map(assessmentDTO, Assessment.class));
    }

    public List<AssessmentDTO> addUpdateAssessments (final List<AssessmentDTO> assessmentDTOList) {
        final List<Assessment> assessmentList = new ArrayList<>();

        for (AssessmentDTO assessmentDTO : assessmentDTOList) {
            assessmentList.add(modelMapper.map(assessmentDTO, Assessment.class));
        }

        final List<Assessment> tmpList = assessmentDao.putAll(assessmentList);

        final List<AssessmentDTO> assessmentRespList = new ArrayList<>();
        if(tmpList != null){
            for (Assessment tmpEmp : tmpList) {
                assessmentRespList.add(modelMapper.map(tmpEmp, AssessmentDTO.class));
            }
        }

        return assessmentRespList;
    }

    public void deleteAssessment(final Long key) {
        assessmentDao.delete(key);
    }
}

