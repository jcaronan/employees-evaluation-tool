/**
 * Created by jcaronan on 11/4/15.
 */

//import PDFdoc from '../../node_modules/phantomjs-pdf/lib/phantomjs-pdf'

export class AssessmentController {
  constructor(AssessmentService, AnswerService, questions, EmployeeService) {
    this.AssessmentService = AssessmentService
    this.AnswerService = AnswerService
    this.EmployeeService = EmployeeService
    this.employee = this.AssessmentService.getEmployee();
    this.questions = this.AssessmentService.questions
  }


  getName() {
    return this.employee.name
  }

  autoSave(value, q) {
    this.AnswerService.addUpdateAnswer(this.AssessmentService.assessmentId,value, q)
  }

  submitReport(){
    

  }
}
AssessmentController.$inject = ['AssessmentService' , 'AnswerService', 'questions', 'EmployeeService']
