package com.cloudsherpas.employeetool.config;

import com.cloudsherpas.employeetool.dao.AnswerDao;
import com.cloudsherpas.employeetool.dao.EmployeeDao;
import com.cloudsherpas.employeetool.dao.QuestionDao;
import com.cloudsherpas.employeetool.dao.AssessmentDao;
import com.cloudsherpas.employeetool.dao.impl.AnswerDaoImpl;
import com.cloudsherpas.employeetool.dao.impl.AssessmentDaoImpl;
import com.cloudsherpas.employeetool.dao.impl.EmployeeDaoImpl;
import com.cloudsherpas.employeetool.dao.impl.QuestionDaoImpl;
import com.cloudsherpas.employeetool.dao.impl.AssessmentDaoImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@Configuration
@Lazy
public class DaoAppContext {

    @Bean(name="employeeDao")
    public EmployeeDao getEmployeeDao() {
        return new EmployeeDaoImpl();
    }

    @Bean(name="questionDao")
    public QuestionDao getQuestionDao() {
        return new QuestionDaoImpl();
    }

    @Bean(name="answerDao")
    public AnswerDao getAnswerDao() {
        return new AnswerDaoImpl();
    }

    @Bean(name="assessmentDao")
    public AssessmentDao getAssessmentDao() {
        return new AssessmentDaoImpl();
    }
}