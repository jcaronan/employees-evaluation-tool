/**
 * Created by jcaronan on 11/4/15.
 */

import PDFdoc from '../../node_modules/pdfkit'

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

  getQuestionSet(){

  }

  autoSave(value, q) {
    this.AnswerService.addUpdateAnswer(this.AssessmentService.assessmentId,value, q)
  }

  generatePdf(){
    var doc = new jsPDF();

    var specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    doc.fromHTML($('page-wrapper').get(0), 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });
    doc.save('sample-page.pdf');
  }
}
AssessmentController.$inject = ['AssessmentService' , 'AnswerService', 'questions', 'EmployeeService']
