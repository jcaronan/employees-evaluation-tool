/**
 * Created by jcaronan on 11/4/15.
 */
export class AssessModalController {
  constructor($uibModalInstance, AssessmentService, assessment, title) {
    this.$uibModalInstance = $uibModalInstance
    this.AssessmentService = AssessmentService
    this.assessment = assessment
    this.title = title
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }

  save() {
    this.AssessmentService.addUpdateQuestion(this.assessment).then(
      function success(response){
        this.$uibModalInstance.close(this.assessment)
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }

  delete() {
    this.AssessmentService.deleteAssessment(this.assessment).then(
      function success(response){
        this.$uibModalInstance.close()
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }

}

AssessModalController.$inject = ['$uibModalInstance', 'AssessmentService', 'assessment', 'title']
