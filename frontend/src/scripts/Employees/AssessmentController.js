/**
 * Created by jcaronan on 11/4/15.
 */

export class AssessmentController {
  constructor(AssessmentService, AnswerService, questions, EmployeeService) {
    this.AssessmentService = AssessmentService
    this.AnswerService = AnswerService
    this.EmployeeService = EmployeeService
    this.employee = this.AssessmentService.getEmployee();
    this.questions = questions
    this.disabled = this.AssessmentService.disabled
  }

  getName() {
    return this.employee.name
  }

  autoSave(value, q) {
    this.AnswerService.addUpdateAnswer(this.AssessmentService.assessmentId,value, q)
  }

  submitReport(){
    this.employee.status = 'Done'
    this.AssessmentService.finalizeAssessment(this.employee);
  }
}
AssessmentController.$inject = ['AssessmentService' , 'AnswerService', 'questions', 'EmployeeService']
