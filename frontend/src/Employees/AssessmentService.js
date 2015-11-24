/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Assessment } from './Assessment'
export class AssessmentService {

  constructor(RestService, $q, QuestionService, AnswerService) {
    this.$q = $q;
    this.restService = RestService;
    this.QuestionService = QuestionService;
    this.AnswerService = AnswerService;
    this.assessmentApi = "assessment";
    this.employee = {};
    this.assessmentId = ""
    this.questions = []
  }

  refreshQuestions(){
    this.questions.length = 0
    var deferred = this.$q.defer();
    this.QuestionService.getQuestions().then(
      function success(response){
        for(var i=0; i<response.length; i++){
          this.questions.push({q:response[i],a:{rating:false}})
        }
        deferred.resolve(this.questions)
      }.bind(this), function error(error){
        deferred.resolve(error)
      }
    )
    return deferred.promise
  }
  setEmployee(employee) {
    this.employee = employee
  }

  getEmployee() {
    return this.employee;
  }

  addUpdateAssessment(employeeId) {
    var a = {
      'employeeId': employeeId
    }
    var assessment = new Assessment(a)
    //var deferred = this.$q.defer();
    this.restService.put(this.assessmentApi, assessment).then(
      function success(response) {
        //console.log(response.data.key)
        this.assessmentId = response.data.key
      }.bind(this),
      function error(error) {
        console.log(error)
      });
  }

  retrieveForm(assessmentId) {
    this.AnswerService.getAllByAssessmentId(assessmentId).then(
      function success(response) {
        console.log("ass",assessmentId)
        console.log(response)
        for(var i= 0; i<this.questions.length; i++){
          for(var n=0; n<response.length; n++){
            if(this.questions[i].q.id == response[n].questionId){
              this.questions[i].a = response[n]
            }
          }
        }
      }.bind(this), function error(error) {
      })
  }

  getAssessmentByEmployee(employeeId) {
    console.log("employee", employeeId)
    this.restService.get("assessment/employee", {'employeeId': employeeId}).then(
      function success(response) {
        console.log(response)
        if (response.status == '200') {
          this.assessmentId = response.data.id
          this.retrieveForm(response.data.id)
        }
      }.bind(this),
      function error(error) {
        console.log(error)
      })
  }
}

AssessmentService.$inject = ['RestService', '$q', 'QuestionService', 'AnswerService']