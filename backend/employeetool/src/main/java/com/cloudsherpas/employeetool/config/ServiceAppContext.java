package com.cloudsherpas.employeetool.config;

import com.cloudsherpas.employeetool.model.Assessment;
import com.cloudsherpas.employeetool.service.AnswerService;
import com.cloudsherpas.employeetool.service.AssessmentService;
import com.cloudsherpas.employeetool.service.EmployeeService;
import com.cloudsherpas.employeetool.service.QuestionService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@Configuration
@Lazy
public class ServiceAppContext {
    @Bean(name="employeeService")
    public EmployeeService getEmployeeService(){
        return new EmployeeService();
    }

    @Bean(name="questionService")
    public QuestionService getQuestionService(){
        return new QuestionService();
    }

    @Bean(name="answerService")
    public AnswerService getAnswerService(){
        return new AnswerService();
    }

    @Bean(name="assessmentService")
    public AssessmentService getAssessmentService(){
        return new AssessmentService();
    }
}