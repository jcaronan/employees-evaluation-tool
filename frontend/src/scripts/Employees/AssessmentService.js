/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Assessment } from './Assessment'
//import 'pdfMake'
import './../../../node_modules/pdfmake/build/pdfmake.min'
import './../../../node_modules/pdfmake/build/vfs_fonts'

export class AssessmentService {

  constructor(RestService, $q, QuestionService, AnswerService, EmployeeService) {
    this.$q = $q;
    this.restService = RestService;
    this.QuestionService = QuestionService;
    this.AnswerService = AnswerService;
    this.EmployeeService = EmployeeService;
    this.assessmentApi = "assessment";
    this.employee = {};
    this.assessmentId = ""
    this.questions = []
    this.checkIfDone()
    this.disabled = true
    this.count = 0
  }

  refreshQuestions(){
    var deferred = this.$q.defer();
    this.QuestionService.getQuestions().then(
      function success(response){
        this.questions.length = 0
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

  addUpdateAssessment(employeeId, total) {

    var a = {
      'employeeId': employeeId,
      'total' : total
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

  checkIfDone() {

    this.AnswerService.getAllByAssessmentId(this.assessmentId).then(
      function success(response) {
        this.count = response.length
        if (response.length == this.questions.length) {
          this.disabled = false
        }
        else {
          this.disabled = true
        }
      }.bind(this),
      function error(error) {
      }
    )
  }


  retrieveForm(assessmentId) {
    this.checkIfDone(assessmentId)
    this.AnswerService.getAllByAssessmentId(assessmentId).then(
      function success(response) {
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
    this.restService.get("assessment/employee", {'employeeId': employeeId}).then(
      function success(response) {
        if (response.status == '200') {
          this.assessmentId = response.data.id
          this.retrieveForm(response.data.id)
        }
      }.bind(this),
      function error(error) {
        console.log(error)
      })
  }

  finalizeAssessment(employee) {
    this.EmployeeService.addUpdateEmployee(employee)
    this.AnswerService.getAllByAssessmentId(this.assessmentId).then(
      function success(response) {
          this.preparePDF(employee,response)
      }.bind(this), function error() {}
    )
  }

  preparePDF(employee, answerList){
    //console.log(answerList)
    var q = [];
    var a = [];
    var total = 0;
    for(var i=0; i<answerList.length; i++){
      for(var n = 0; n<this.questions.length; n++){
        if(this.questions[n].q.id == answerList[i].questionId){
          total = total + parseInt(this.questions[n].q.score)
          q.push(this.questions[n].q.text + " (" + this.questions[n].q.score + " pts)")
        }
      }
      var temp;
      switch(answerList[i].rating){
        case 1 : temp = "Rating: Poor, Earned Points: " + answerList[i].grade
          break;
        case 2 : temp = "Rating: Needs Improvement, Earned Points: " + answerList[i].grade
          break;
        case 3 : temp = "Rating: Satisfactory, Earned Points: " + answerList[i].grade
          break;
        case 4 : temp = "Rating: Excellent, Earned Points: " + answerList[i].grade
          break;
        case 5 : temp = "Rating: Exceptional, Earned Points: " + answerList[i].grade
          break;
      }
      a.push(temp)
    }


    this.generatePDF(employee.name,q, a, total)
    this.addUpdateAssessment(employee.id, total)
  }

  generatePDF(name, q, a, total){
    var dd = {
      content: [
        {
          text: name + '\n\n',
          style: 'header'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        }
      }
    }

    for(var i =0; i<q.length; i++){
      var qtext = {
          text: q[i] + '\n\n',
          style: 'subheader'
      }

      dd.content.push(qtext)
      dd.content.push(a[i] + '\n\n')
    }

    var overall = {
      text: "TOTAL : " + total,
      style: 'subheader'
    }

    dd.content.push(overall)

    var pdf = pdfMake.createPdf(dd);
  var data;
    pdf.getDataUrl(function(dataURL) {
      data = dataURL;
      var params  = {
        'link': dataURL,
        'emailAddress': 'jasmin.caronan@cloudsherpas.com',
        'name': 'Jasmin Caronan'
      }
      this.restService.post("mail",params ).then(
        function success(response){console.log(response)},
        function error(error){})
    }.bind(this))
    pdf.open()
  }
}

AssessmentService.$inject = ['RestService', '$q', 'QuestionService', 'AnswerService', 'EmployeeService']